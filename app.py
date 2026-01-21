from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder="static",
    template_folder="templates"
)

# LOGIN PAGE
@app.route("/")
def login():
    return render_template("login.html")

# HOME PAGE (DINE DASH)
@app.route("/home")
def home():
    return render_template("index.html")

# BACKEND HEALTH CHECK
@app.route("/health")
def health():
    return {
        "status": "UP",
        "service": "DINE DASH Backend"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

