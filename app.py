import os
from flask import Flask, send_from_directory, render_template, redirect

# Enable debug logging
import logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, 
            static_folder='dist',  # Changed to the dist root folder
            template_folder='dist')

# Add a route to explicitly serve index.html
@app.route('/')
def index():
    return send_from_directory(app.template_folder, 'index.html')

# Add a route to handle test.html
@app.route('/test.html')
def test():
    return send_from_directory('.', 'test.html')

# Remove the /flask-portfolio prefix from requests
@app.route('/flask-portfolio/', defaults={'path': ''})
@app.route('/flask-portfolio/<path:path>')
def remove_prefix(path):
    if path:
        return redirect(f'/{path}')
    return redirect('/')

# Handle asset requests - check static folder first
@app.route('/<path:path>')
def serve(path):
    app.logger.debug(f"Requested path: {path}")
    
    # First check if it's directly in the dist folder
    if os.path.exists(os.path.join('dist', path)):
        app.logger.debug(f"Serving from dist: {path}")
        return send_from_directory('dist', path)
    
    # Next check if it's in assets within dist
    assets_path = os.path.join('dist', 'assets')
    if path.startswith('assets/') and os.path.exists(os.path.join('dist', path)):
        app.logger.debug(f"Serving asset: {path}")
        relative_path = path[7:]  # Remove 'assets/' prefix
        return send_from_directory(assets_path, relative_path)
    
    # For any other path, serve index.html (for React routing)
    app.logger.debug(f"Path not found, serving index.html instead")
    return send_from_directory(app.template_folder, 'index.html')

if __name__ == '__main__':
    # Check if the build directory exists
    if not os.path.exists('dist'):
        print("\n\n============== ERROR ==============")
        print("The 'dist' directory does not exist!")
        print("Please run 'npm run build' first.")
        print("===================================\n\n")
        exit(1)
        
    # Check if index.html exists in the dist folder
    if not os.path.exists(os.path.join('dist', 'index.html')):
        print("\n\n============== ERROR ==============")
        print("index.html not found in 'dist' folder!")
        print("Check your build configuration and rebuild.")
        print("===================================\n\n")
        exit(1)
        
    print("\n\n============== SERVING ==============")
    print(f"Static folder: {os.path.abspath('dist')}")
    print("======================================\n\n")
        
    # Bind to 0.0.0.0 to make it accessible outside the container
    app.run(debug=True, host='0.0.0.0', port=5000)
