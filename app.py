from flask import Flask, redirect, render_template, request, session, make_response, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about_me")
def about_me():
    return render_template("about_me.html")