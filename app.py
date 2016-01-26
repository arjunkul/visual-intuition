from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/simple')
def simple_world():
    return render_template('simple.html')

@app.route('/who_whom')
def who_whom():
    return render_template('who_whom.html')

@app.route('/')
def p5view():
    return render_template('p5view.html')

if __name__ == '__main__':
    app.run()