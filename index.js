const express = require('express') // Đi vào thư mục node_module để nó tải, tải ra ngoài đây để nó nạp vào biến express
const app = express()   //express chính là 1 cái function, cái gì được function này trả về thì nó đã được xây dựng sẵn trong express
                        // Hàm express() trả về 1 đối tượng và đối tượng này đại diện cho ứng dụng nodejs
const port = 3000   // Định nghĩa muốn run cái website ở cái port nào(Cổng nào) 

app.get('/tin-tuc', (req, res) => {
  var a = 1;
  var b = 2;

  var c = a + b;
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})