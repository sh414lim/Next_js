module.exports = {
  reactStrictMode: true,

  //API KEY 숨김
  async redirects() {
    return [
      {
        // redirection step.1 - source 를 찾는다
        source: "/", //유저가 이곳으로 갈거라면
        destination: "/form", //이곳으로 유저를 보낸다
        //redirection 이 permanet(영구적) 인지 아닌지에 따라서
      },
    ];
  },
};

//api 키를 숨기지 않는 리다이렉트 redirection
//서버 와 클라이언트 가 나뉜다
