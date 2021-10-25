const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp", "hel", "help", "back"],
  run: async (client, message, args ) => {
      //--------------------S T A R T---------------------------------------
      await message.delete()

    //--------------------EMBEDS------------------------
    

    const embed = new Discord.MessageEmbed()
    .setTitle("**__Produk Menu__**")
    .setDescription(` Gunakan \`.next\` untuk melihat Command Bot\n
    Bantu kami dengan memberikan\n
    > ☆ Lapor
    > ☆ Saran

    Note :
   Join Our Server :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**`)
    .setFooter(`Gunakan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('**__Premium App__**')
    .setDescription(`
    **__Netflix Premium__**
  > ☆
  > ☆
  > ☆ 

   **__Spotify Premium__**
  > ☆ 
  > ☆ 
  > ☆ 

   **__Youtube Premium__**
  > ☆ 
  > ☆ 
  > ☆ 
  Cek Produk lainnya di :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**\n`)
  .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());
  

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('**__Top Up Games__**')
    .setDescription(`
      **__Point Blank Beyond Limit__**
  \`   ☆ 1200 CASH = Rp12.000
   ☆ 2400 CASH = Rp22.000
   ☆ 6000 CASH = Rp50.000
   ☆ 12000 CASH = Rp100.000
   ☆ 24000 CASH = Rp195.000
   ☆ 36000 CASH = Rp300.000
   ☆ 60000 CASH = Rp.500.000\`

   **__FreeFire__**
  > ☆ 
  > ☆ 
  > ☆ 

   **__Mobile Legend__**
   \`   ☆ 50 Diamond = Rp15.000
   ☆ 100 Diamond = Rp30.000
   ☆ 200 Diamond = RP55.000
   ☆ 250 Diamond = Rp65.000
   ☆ 500 Diamond = Rp115.000
   ☆ 750 Diamond = Rp185.000
   ☆ 1000 Diamond = RP240.000
   ☆ 1750 Diamond = Rp420.000
   ☆ 3000 Diamond = Rp750.000
   ☆ 5000 Diamond = Rp1.250.000\`

   **__PUBG Mobile__**
   \`   ☆ 35 UC = Rp10.000
50 UC = Rp15.000
60 UC = Rp17.000
70 UC = Rp20.000
100 UC = Rp25.000
120 UC = Rp30.000
125 UC = Rp31.000
150 UC = Rp35.000
180 UC = Rp40.000
210 UC = Rp45.000
250 UC = Rp55.000
300 UC = Rp65.000
350 UC = Rp75.000
400 UC = Rp85.000
500 UC = Rp105.000
600 UC = Rp125.000
650 UC = Rp135.000
700 UC = Rp145.000
800 UC = Rp165.000
1000 UC = Rp205.000
1200 UC = Rp225.000
1250 UC = Rp235.000
1350 UC = Rp245.000
1400 UC = Rp255.000
1500 UC = Rp270.000
1750 UC = Rp320.000
2000 UC = Rp360.000
3000 UC = Rp495.000
3500 UC = Rp580.000
4000 UC = Rp670.000
5000 UC = Rp830.000
6000 UC = Rp950.000
7000 UC = Rp1.110.000
7500 UC = Rp1.205.000\`

  Note :
☆ Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
☆ Harap tanyakan Harga dan Stok sebelum membeli
☆ Proses 10 menit

Cek Produk Lainnya di :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**
    `)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed3 = new Discord.MessageEmbed()
    .setTitle('**__MOD GTA V__**')
    .setColor("RANDOM")
    .setDescription(`
\`Ovix = Rp130.000
Oxid = Rp235.000
Spooky = Rp275.000
NewWay = Rp405.000
Cherax = Rp560.000
XCheats = Rp200.000
X-Force = Rp305.000
Frontier = Rp625.000
Fragment = Rp662.000
Delusion = Rp322.000
Midnight = Rp405.000
Nightfall = Rp350.000
Ilusion Engine = Rp452.000
Phantom X Digital Deluxe = Rp480.000

Impulse VIP = Rp790.000
Impulse Standard = Rp455.000
Impulse Essential = Rp305.000
Impulse Standard -> VIP = Rp450.000
Impulse Essential-> Standard = Rp350.000

Stand Basic = Rp225.000
Stand Regular = Rp440.000
Stand Ultimate = Rp825.000
Stand Upgrade Basic->Reqular = Rp285.000
Stand Upgrade Regular->Ultimate = Rp445.000

2Take1 Standart 40 Days = Rp282.000
2Take1 Standart 90 Days = Rp495.000
2Take1 Standart 180 Days = Rp815.000
2Take1 Standart Lifetime = Rp1.372.000

2Take1 VIP 40 Days = Rp381.000
2Take1 VIP 90 Days = Rp700.000
2Take1 VIP 180 Days = Rp1.132.000
2Take1 VIP Lifetime = Rp2.025.000\`

Note :
☆ Beli = Tau cara menggunakan
☆ Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
☆ Harap tanya Stok dan Harga sebelum Order / Beli

Cek Produk lainnya di :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**
`)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed4 = new Discord.MessageEmbed()
    .setTitle('**__Recovery GTA Online__**')
    .setColor("RANDOM")
    .setDescription(`
Process via LOGIN (Hanya EPIC GAMES)
**__Paket A__**
\`Money : $10.000.000
Level : 120
Stats : All Maxs
Achievment : Unlock All
Free : Podium Vehicle Casino
Price : Rp15.000\`

**__Paket B__**
\`Money : $30.000.000
Level : 120
Stats : All Maxs
Achievment : Unlock All
Free : Podium Vehicle Casino
Price : Rp30.000\`


**__Paket C__**
\`Money : $50.000.000
Level : 120
Stats : All Maxs
Achievment : Unlock All
Free : Podium Vehicle Casino
Price : Rp15.000\`

**__Money Only__**
\`$10.000.000 = Rp10.000
$20.000.000 = Rp20.000
$30.000.000 = Rp30.000
$40.000.000 = Rp40.000
$50.000.000 = Rp45.000\`

**__Unlock All LS Custom__**
\`- Armor
- Brakes
- Engine
- And other vehicle part
Price : Rp10.000\`

**__Unlock All Research Bunker__**
\`Price : 20.000\`

**__Unlock All Achievement, Research and other Item__**
\`Free : Podium Vehicle 
Price : 15.000\`

Note : 
 ☆ Proses memakan waktu 1 - 24 Jam ( Tergantung situasi dan Antrian)
 ☆ Garansi 3 Hari setelah order
    Hanya pengembalian harga jasa yang dibeli bukan mengganti akun yang di ban
 ☆ Jasa diatas ini menggunakan MOD  yang sebagaimana melanggar TOS dari pihak R* sehingga kemungkinan 
    BAN ada, Tetapi saya memastikan kemungkinan BAN tersebut sangatlah kecil.

**__Jasa Heist Cepat__**
Individu
\`1 Heist     = Rp5.000/orang
3 Heist     = Rp10.000/orang
5 Heist     = Rp15.000/orang
10 Heist    = Rp25.000/orang\`

**__Paket Group (3 orang)__**
\`1 Heist     = Rp8.000
3 Heist     = Rp20.000
5 Heist     = Rp40.000
10 Heist    = Rp75.000\`

\`Pendapatan per 1x Heist 
Casino : $3.500.000/orang
Cayo   : $2.400.000/orang\`
Note : 
  ☆  Waktu Pengerjaan tergantung situasi dan paket yang diorder.
  ☆  Jika order tersebut dalam 1 hari tidak selesai dapat dilanjut besok atau kapan anda sempat main
  ☆  Resiko BAN Super Duper Kecil karena dijoki heist bukan dikerjakan melalui login dan menggunakan MOD
  
 Cek Produk lainnya di :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**`)
  .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed5 = new Discord.MessageEmbed()
    .setTitle('**__Produk Digital__**')
    .setColor("RANDOM")
    .setDescription(`
    **__Steam Wallet__**
    \`6K Wallet = 8K
8K Wallet = 12K
12K Wallet = 15K
45K Wallet = 50K
60K Wallet = 65K
90K Wallet = 100K
120K Wallet = 130K
250K Wallet = 270K
400K Wallet = 430K
600K Wallet = 630K\`

**__Discord Nitro__**
  > ☆ 
  > ☆ 
  > ☆ 

**__Follower IG__**
  > ☆ 
  > ☆ 
  > ☆ 


Note :
☆ Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
☆ Harap tanyakan Harga dan Stok sebelum membeli
☆ Proses 10 menit

Cek Produk lainnya di :point_right: **[Super Store](https://discord.gg/BXt7cuvhMu)**
    `)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());
    
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Premium App`)
    .setID(`premium`)
    .setEmoji(`902022186322255932`)
    .setStyle("gray");
    

     let button2 = new MessageButton()
    .setLabel(`Top Up Games`)
    .setID(`topup`)
    .setEmoji(`902022186322255932`)
    .setStyle("gray");

     let button3 = new MessageButton()
    .setLabel(`MOD GTA`)
    .setID(`mod`)
    .setEmoji(`902022186322255932`)
    .setStyle("gray");


     let button4 = new MessageButton()
    .setLabel(`Recovery`)
    .setID(`recovery`)
    .setEmoji(`902022186322255932`)
    .setStyle("gray");

     let button5 = new MessageButton()
    .setLabel(`Produk`)
    .setID(`produk`)
    .setEmoji(`902022186322255932`)
    .setStyle("gray");

    

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5,);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

       if(b.id == "premium") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "topup") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "mod") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "recovery") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "produk") {
         
            MESSAGE.edit(embed5, row);
            await b.reply.defer()
        }
  
  
    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
        .then(msg => msg.delete({timeout:2000}));
    })

       //---------------------------------------E N D----------------------------------------
       

    }
  };