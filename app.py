from flask import Flask, render_template, make_response
import datetime


app = Flask("__name__")

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/about_me", methods=["GET"])
def about_me():
    return render_template("about_me.html")

@app.route('/sitemap.xml')
def sitemap():
    pages = []

    ten_days_ago = (datetime.datetime.now() - datetime.timedelta(days=10)).date().isoformat()
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods and len(rule.arguments) == 0:
            pages.append(
                ["https://imhoteptech.vercel.app" + str(rule.rule), ten_days_ago]
            )

    sitemap_xml = render_template('sitemap_template.xml', pages=pages)
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"

    return response
