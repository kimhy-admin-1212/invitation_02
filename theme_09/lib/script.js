const lyricsData = [
  { time: 18, text: "Let's go", singer: "Bùi Công Nam" },
  {
    time: 19,
    text: "Hôm nay mình lên rừng Băng qua nơi kia xa xa góc suối",
    singer: "Bùi Công Nam",
  },
  {
    time: 23,
    text: "Leo cao tận trên đồi. Nhanh em ơi chú Sáu gọi rồi",
    singer: "Bùi Công Nam",
  },
  { time: 26, text: "Bình thường thì cười cười nói nói", singer: "Jun Phạm" },
  { time: 28, text: "Nay xem ai nhiều mồ hôi rơi", singer: "Jun Phạm" },
  {
    time: 30,
    text: "Nào cùng Gia đình Haha. Mình làm nông dân nhá",
    singer: "Jun Phạm",
  },
  {
    time: 34,
    text: "Ở đây ai cũng quen rồi. Mặt trời mọc là cất bước thôi",
    singer: "Duy Khánh",
  },
  {
    time: 37.5,
    text: "Ngân nga vài đôi lời. Bàn chân đi theo những áng mây trôi",
    singer: "Ngọc Thanh Tâm",
  },
  { time: 41, text: "Vượt đèo vượt đồi vượt sóng lớn", singer: "Tất cả" },
  { time: 43, text: "Người bình thường mà rất phi thường", singer: "Tất cả" },
  { time: 48, text: "Và mình cùng hát mình cùng ở", singer: "Bùi Công Nam" },
  { time: 50, text: "Cùng làm với những nông dân", singer: "Bùi Công Nam" },
  { time: 51.5, text: "Cùng vui cùng sống", singer: "Bùi Công Nam" },
  {
    time: 53,
    text: "Chung hơi thở từ miền xa đến nơi gần",
    singer: "Bùi Công Nam",
  },
  {
    time: 55,
    text: "Ta sẽ được thấy được hiểu những điều",
    singer: "Jun Phạm",
  },
  { time: 58, text: "Bình thường mà lại rất phi thường", singer: "Jun Phạm" },
  { time: 60, text: "Gia đình ha ha bắt đầu nhá!", singer: "Bùi Công Nam" },
  { time: 62, text: "Sẵn sàng chưa", singer: "Bùi Công Nam" },
  {
    time: 63,
    text: "Đón lấy nắng sớm phía bên kia chân đồi",
    singer: "Tất cả",
  },
  {
    time: 66.5,
    text: "Từ từ thôi hít hết gió mát. Ngay nơi ta ngồi",
    singer: "Tất cả",
  },
  {
    time: 70,
    text: "Xỏ giày vào chân ngay xắn tay lên",
    singer: "Tất cả",
  },
  {
    time: 72.5,
    text: "Theo nhau ta bắt đầu viết nên. Hành trình ở đây",
    singer: "Tất cả",
  },
  {
    time: 77,
    text: "Nhìn kìa em. Bao nhiêu thân quen ở ngay nơi lạ",
    singer: "Tất cả",
  },
  {
    time: 81,
    text: "Chân thành giản đơn. Mà vô vàn điều quý giá",
    singer: "Tất cả",
  },
  {
    time: 84.5,
    text: "Thả hồn thơ ngây. Để ta bình yên cùng nhau sống",
    singer: "Tất cả",
  },
  {
    time: 87.5,
    text: "Những ngày trời bao la",
    singer: "Tất cả",
  },
  {
    time: 92,
    text: "Và ta sẽ thấy. Người dân Việt Nam ở muôn hướng",
    singer: "Tất cả",
  },
  {
    time: 95,
    text: "Bình thường mà rất phi thường.",
    singer: "Tất cả",
  },
  {
    time: 100.5,
    text: "Bình thường mà phi thường. Người thường mà phi phàm.",
    singer: "Tất cả",
  },
  {
    time: 104,
    text: "Nào cùng gia đình Haha. Mình làm nông dân nhá",
    singer: "Tất cả",
  },
  {
    time: 108,
    text: "Tối ngày tất bật. Cứ mài thân mình vào với gió sương",
    singer: "Rhymastic",
  },
  {
    time: 111.5,
    text: "Vẫn kịp cảm nhận sắc đẹp hữu tình. Của ba miền quê hương",
    singer: "Rhymastic",
  },
  {
    time: 115,
    text: "Ngắm đồng lúa vàng sẵn một khung trời. Rộng lớn để ươm",
    singer: "Rhymastic",
  },
  {
    time: 118,
    text: "Nghe sự tất bật vào mỗi sáng sớm.",
    singer: "Rhymastic",
  },
  {
    time: 120,
    text: "Những tiếng gắt gỏng chứa tình mến thương",
    singer: "Rhymastic",
  },
  {
    time: 122,
    text: "Những mâm cơm ngon từ anh cả Thuận",
    singer: "Rhymastic",
  },
  {
    time: 123.5,
    text: "Sau một ngày lao động. Dãi nắng mưa dầm",
    singer: "Rhymastic",
  },
  {
    time: 125.5,
    text: "Hai Thiện và Ba Nam. Cùng những màn tranh luận",
    singer: "Rhymastic",
  },
  {
    time: 127.3,
    text: "Xem ai phải rửa bát. Út Khánh hay Tư Tâm",
    singer: "Rhymastic",
  },
  {
    time: 129.5,
    text: "Việc nhỏ việc lớn. Có anh em đỡ đần",
    singer: "Rhymastic",
  },
  {
    time: 131.5,
    text: "Nếu thấy gian nan. Mỗi người một tay một chân",
    singer: "Rhymastic",
  },
  {
    time: 133.3,
    text: "Thi nhau đón nắng ấm. Như cây con mọc mầm",
    singer: "Rhymastic",
  },
  {
    time: 135,
    text: "Cho nụ cười tươi tắn quanh năm",
    singer: "Rhymastic",
  },
  {
    time: 136.5,
    text: "Và mình cùng hát mình cùng ở. Cùng làm với những nông dân",
    singer: "Bùi Công Nam",
  },
  {
    time: 140,
    text: "Cùng vui cùng sống. Chung hơi thở. Từ miền xa đến nơi gần",
    singer: "Bùi Công Nam",
  },
  {
    time: 144,
    text: "Ta sẽ được thấy được hiểu những điều.",
    singer: "Jun Phạm",
  },
  {
    time: 146.5,
    text: "Bình thường mà lại rất phi thường",
    singer: "Jun Phạm",
  },
  { time: 148.5, text: "Gia đình ha ha bắt đầu nhá!", singer: "Bùi Công Nam" },
  { time: 151, text: "Sẵn sàng chưa", singer: "Bùi Công Nam" },
  {
    time: 152,
    text: "Đón lấy nắng sớm phía bên kia chân đồi",
    singer: "Tất cả",
  },
  {
    time: 155,
    text: "Từ từ thôi hít hết gió mát. Ngay nơi ta ngồi",
    singer: "Tất cả",
  },
  {
    time: 158.5,
    text: "Xỏ giày vào chân ngay xắn tay lên",
    singer: "Tất cả",
  },
  {
    time: 161,
    text: "Theo nhau ta bắt đầu viết nên. Hành trình ở đây",
    singer: "Tất cả",
  },
  {
    time: 165.5,
    text: "Nhìn kìa em. Bao nhiêu thân quen ở ngay nơi lạ",
    singer: "Tất cả",
  },
  {
    time: 169.5,
    text: "Chân thành giản đơn. Mà vô vàn điều quý giá",
    singer: "Tất cả",
  },
  {
    time: 173.3,
    text: "Thả hồn thơ ngây. Để ta bình yên cùng nhau sống",
    singer: "Tất cả",
  },
  {
    time: 176,
    text: "Những ngày trời bao la",
    singer: "Tất cả",
  },
  {
    time: 181,
    text: "Let's go",
    singer: "Tất cả",
  },
  {
    time: 181.5,
    text: "Đón lấy nắng sớm. Phía bên kia chân đồi",
    singer: "Tất cả",
  },
  {
    time: 184.3,
    text: "Từ từ thôi hít hết gió mát. Ngay nơi ta ngồi",
    singer: "Tất cả",
  },
  {
    time: 188,
    text: "Xỏ giày vào chân ngay xắn tay lên",
    singer: "Tất cả",
  },
  {
    time: 190.3,
    text: "Theo nhau ta bắt đầu viết nên. Hành trình ở đây",
    singer: "Tất cả",
  },
  {
    time: 195,
    text: "Nhìn kìa em. Bao nhiêu thân quen ở ngay nơi lạ",
    singer: "Tất cả",
  },
  {
    time: 199,
    text: "Chân thành giản đơn. Mà vô vàn điều quý giá",
    singer: "Tất cả",
  },
  {
    time: 203,
    text: "Thả hồn thơ ngây. Để ta bình yên cùng nhau sống",
    singer: "Tất cả",
  },
  {
    time: 205.5,
    text: "Những ngày trời bao la",
    singer: "Tất cả",
  },
  {
    time: 210,
    text: "Và ta sẽ thấy. Người dân Việt Nam ở muôn hướng",
    singer: "Tất cả",
  },
  {
    time: 213,
    text: "Bình thường mà rất phi thường.",
    singer: "Tất cả",
  },
  {
    time: 218.5,
    text: "Bình thường mà phi thường. Người thường mà phi phàm.",
    singer: "Tất cả",
  },
  {
    time: 222,
    text: "Nào cùng gia đình Haha. Mình làm nông dân nhá",
    singer: "Tất cả",
  },
  {
    time: 226,
    text: "Bình thường mà phi thường. Người thường mà phi phàm.",
    singer: "Tất cả",
  },
  {
    time: 229.5,
    text: "Nào cùng gia đình Haha. Mình làm nông dân nhá",
    singer: "Tất cả",
  },
];

const mySongList = ["/theme_09/lib/nhung-ngay-troi-bao-la.mp3"];
const audioPlayer = new Audio(mySongList[0]);
const lyricsContainer = document.querySelector("#HEADLINE7111 .ladi-headline"); // lấy đúng phần tử <p>
const singerSpans = document.querySelectorAll(".singer");

document.addEventListener(
  "click",
  () => {
    audioPlayer.play();
  },
  { once: true }
);

function updateLyrics() {
  const currentTime = audioPlayer.currentTime;

  for (let i = 0; i < lyricsData.length; i++) {
    const currentLine = lyricsData[i];
    const nextLine = lyricsData[i + 1] || { time: Number.MAX_VALUE };

    if (currentTime >= currentLine.time && currentTime < nextLine.time) {
      lyricsContainer.textContent = currentLine.text;
      highlightSinger(currentLine.singer);
      break;
    }
  }
}

function highlightSinger(name) {
  singerSpans.forEach((span) => {
    const boxWrapper = span.closest(".ladi-element"); // chính là #BOX2
    const isActive = name === "Tất cả" || span.dataset.singer === name;
    if (boxWrapper) boxWrapper.classList.toggle("active", isActive);
    span.classList.toggle("active", isActive);
  });
}

audioPlayer.addEventListener("timeupdate", updateLyrics);
