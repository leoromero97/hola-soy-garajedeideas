function Music() {
  return (
    <div id="musica" className="flex flex-col">
          <div className="flex flex-col gap-20">
      <h2 className="text-4xl font-medium mt-20">Música 🎶</h2>
      <p className="text-lg">
        Escucho cualquier género de música y no me molesta para nada que haya siempre música, incluso de fondo para trabajar, pero acá les dejo unas playlist que me gustan mucho,
        <strong className="font-bold"> un dato random es que tome algunas clases de piano 🎹 </strong>
      </p>
      <div className="grid grid-cols-3 py-6 gap-10">
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWU6Rfto8Ppm?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/2MSE9BQC2U1i3U4NNltxOw?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/7tgTgMgzX3HsmRWvXLsemU?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/album/0cHhJElGZoC4fFXCFb7ORZ?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/5SqR3iQ1rvzjjB8vEPlF8d?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/5khN4UX55KVjaFPXHq2ydq?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
      </div>
    </div>
  )
}

export default Music;
