export async function gera() {

  const resposta = await fetch('https://dogapi.dog/api/v1/facts?number=1')
  const dados = await resposta.json()

  // const traducao = await traduzirTexto(dados.facts[0])
  const traducao = dados.facts[0]
  return traducao
}

export async function traduzirTexto(texto) {

  const resposta = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`
  )

  const dados = await resposta.json()

  if (dados.responseStatus !== 200) {
    return texto // mostra inglês
  }

  return dados.responseData.translatedText

}
