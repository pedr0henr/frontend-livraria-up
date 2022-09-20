import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://livraria-dudubarbaro.herokuapp.com/livros");
    return response.data;
  }
  async buscarLivro(id) {
    const response = await axios.get(`https://livraria-dudubarbaro.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("https://livraria-dudubarbaro.herokuapp.com/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://livraria-dudubarbaro.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://livraria-dudubarbaro.herokuapp.com/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}
