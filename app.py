from flask import Flask, render_template

# Cria a instância do app Flask
# 'static_folder' é onde ficam os arquivos JS/CSS (gerados pelo Vite)
# 'template_folder' é onde fica o index.html (gerado pelo Vite)
app = Flask(__name__, static_folder="static", template_folder="templates")

# Rota principal: captura qualquer rota e retorna o index.html
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")

# Executa localmente (caso rode manualmente com python app.py)
if __name__ == "__main__":
    app.run(debug=True)
