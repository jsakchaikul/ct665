const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>Name: Jatuporn Sakchaikul</p>
    <p>id: 65130598</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-1/394284237_7053237471361163_6450970630934034358_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhP0jqxaycN3_cYP3KNTA1ZU3JN4vWuzdlTck3i9a7N3W8UFDfrdS3SqhUK31n6mh0pFybvtqGtYfFvNuYHDcx&_nc_ohc=y0MXIK8ELjYQ7kNvgETqG7k&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYBc_7hX7KjyZcd4mK751UAglYHgg9CujvyjpxhgySowKg&oe=664F72E8" alt="รูปภาพ">
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>DEVELOPMENT OF AUTONOMOUS FARMING WITH LORA TECHNOLOGY This article is about the design and development of a wide-scale agricultural automation system based on LoRa WAN technology with the Internet of Things technology. with the operation of micro-controller devices to control the operation of various systems such as monitoring soil moisture. Measuring temperature and humidity in the air and remote watering control by centrally controlling the display and adjusting work automatically through web services.
    Nowadays technology is progressing. and has been applied to create tools for increasing the efficiency of planting in coconut plantations. With technology widely available, low cost, and easily accessible. Save costs in farming It is beneficial in driving agricultural business. 
  </p>
    <a href="/">Home</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>ศึกษาปัญหาของการปลูกต้นมะพร้าว</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Literature review</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>วางแผนและออกแบบโครงงาน</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ดำเนินการสร้างชิ้นงาน</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงาน</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>วัดประสิทธิภาพ และความสามารถของงานวิจัย</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงานและบันทึกผล</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผล และสรุป</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">Home</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "ศึกษาปัญหาของการปลูกต้นมะพร้าว",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "Literature review",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "วางแผนและออกแบบโครงงาน",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "ดำเนินการสร้างชิ้นงาน",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "ทดสอบการทำงาน",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "วัดประสิทธิภาพ และความสามารถของงานวิจัย",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "ทดสอบการทำงานและบันทึกผล",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "ประเมินผล และสรุป",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);
