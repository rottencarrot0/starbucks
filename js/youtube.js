// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // 위 함수의 이름은 외부에서 가져온 유튜브를 제어해 주는 javascript library가 자체적으로 이 함수의 이름을 
  // 찾는 것이기 때문에 절대 바꾸면 안된다. 
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    // 소스코드 전체를 복사해서 넣게 된다면 제어가 안된다는 문제가 있다. 
    //갖가지 명령을 넣어주어야 하기때문에 영상의 Id부분만 복사해 넣어주면 된다. 
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop:true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반목 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        //동영상 플레이어가 준비가 되면 그때 이 함수를 실행할건데 이 함수를 실행할때 그 함수의 인수로 
        // 동영상이 플레이되는 상황자체를 데이터로써 넘겨주게 된다. 
        // 이 함수 내에서 그것을 event라는 매개변수의 이름으로 받아서 함수내부에서 활용해 쓸 수 있다. 
        event.target.mute() //음소거
      }
    }
  });
}