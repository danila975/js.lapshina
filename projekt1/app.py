from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    server_message = ''
    client_message = ''

    if request.method == 'POST':
        client_message = request.form.get('message')
    if client_message != '':
        server_message = 'спасибо за ваш ответ, он нам очень помог'
        return render_template(
            'index1.html',
            message=server_message,
        )
    else:
        return render_template(
            'index.html',
            message=server_message,
    )

