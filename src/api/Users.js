const users = [{"id":1,"fullName":"Otha Mouse","fullMobileNu":"+51 183 612 9426","email":"omouse0@joomla.org","signupData":"2024-03-11"},
    {"id":2,"fullName":"Fanchette Knight","fullMobileNu":"+57 258 308 2056","email":"fknight1@photobucket.com","signupData":"2024-09-30"},
    {"id":3,"fullName":"Ingram Kardos-Stowe","fullMobileNu":"+62 490 993 6547","email":"ikardosstowe2@rediff.com","signupData":"2024-01-07"},
    {"id":4,"fullName":"Sharlene Summerill","fullMobileNu":"+63 442 639 1655","email":"ssummerill3@vkontakte.ru","signupData":"2024-10-06"},
    {"id":5,"fullName":"Morley Desaur","fullMobileNu":"+86 357 242 2283","email":"mdesaur4@bizjournals.com","signupData":"2024-01-30"},
    {"id":6,"fullName":"Mel Crookall","fullMobileNu":"+62 929 804 2768","email":"mcrookall5@wp.com","signupData":"2024-08-06"},
    {"id":7,"fullName":"Sammy Dadge","fullMobileNu":"+62 597 513 3825","email":"sdadge6@nydailynews.com","signupData":"2024-03-18"},
    {"id":8,"fullName":"Sonnie Badder","fullMobileNu":"+86 486 511 7653","email":"sbadder7@ox.ac.uk","signupData":"2024-02-17"},
    {"id":9,"fullName":"Clarke Cabedo","fullMobileNu":"+263 818 516 2954","email":"ccabedo8@scientificamerican.com","signupData":"2024-10-01"},
    {"id":10,"fullName":"Kial Jillard","fullMobileNu":"+962 249 922 0750","email":"kjillard9@ucoz.ru","signupData":"2024-05-17"},
    {"id":11,"fullName":"Dayna Takis","fullMobileNu":"+389 794 691 7649","email":"dtakisa@google.com.br","signupData":"2024-11-12"},
    {"id":12,"fullName":"Terencio Elcoat","fullMobileNu":"+86 154 881 4791","email":"telcoatb@earthlink.net","signupData":"2024-12-05"},
    {"id":13,"fullName":"Gene Denisyev","fullMobileNu":"+380 194 523 2037","email":"gdenisyevc@trellian.com","signupData":"2024-08-03"},
    {"id":14,"fullName":"Godiva Muston","fullMobileNu":"+351 652 728 8451","email":"gmustond@live.com","signupData":"2024-08-22"},
    {"id":15,"fullName":"Kevin Frensch","fullMobileNu":"+57 690 969 8815","email":"kfrensche@guardian.co.uk","signupData":"2024-05-26"},
    {"id":16,"fullName":"Tedmund Skippings","fullMobileNu":"+359 400 697 0116","email":"tskippingsf@wix.com","signupData":"2024-07-01"},
    {"id":17,"fullName":"Roderick Lamas","fullMobileNu":"+977 715 341 1848","email":"rlamasg@tumblr.com","signupData":"2024-10-22"},
    {"id":18,"fullName":"Terencio Sterley","fullMobileNu":"+66 831 825 6509","email":"tsterleyh@mediafire.com","signupData":"2023-12-28"},
    {"id":19,"fullName":"Corina Kirrage","fullMobileNu":"+86 376 432 4540","email":"ckirragei@wordpress.com","signupData":"2024-08-19"},
    {"id":20,"fullName":"Brett Dinwoodie","fullMobileNu":"+31 835 492 9546","email":"bdinwoodiej@freewebs.com","signupData":"2024-12-10"},
    {"id":21,"fullName":"Ulises Nares","fullMobileNu":"+93 980 142 1137","email":"unaresk@webmd.com","signupData":"2024-04-26"},
    {"id":22,"fullName":"Hector Jobe","fullMobileNu":"+55 839 707 8005","email":"hjobel@hp.com","signupData":"2024-03-24"},
    {"id":23,"fullName":"Gabriele Greet","fullMobileNu":"+92 216 451 7644","email":"ggreetm@economist.com","signupData":"2024-02-22"},
    {"id":24,"fullName":"Gram Lympany","fullMobileNu":"+86 918 303 7191","email":"glympanyn@va.gov","signupData":"2024-07-10"},
    {"id":25,"fullName":"Sophie Tupling","fullMobileNu":"+351 950 975 2716","email":"stuplingo@deviantart.com","signupData":"2024-05-17"},
    {"id":26,"fullName":"Irwinn Fidilis","fullMobileNu":"+60 512 842 9170","email":"ifidilisp@archive.org","signupData":"2024-11-15"},
    {"id":27,"fullName":"Muriel Batterham","fullMobileNu":"+33 134 898 3526","email":"mbatterhamq@usnews.com","signupData":"2024-08-24"},
    {"id":28,"fullName":"Linda Kinlock","fullMobileNu":"+86 559 736 1680","email":"lkinlockr@youtube.com","signupData":"2024-05-22"},
    {"id":29,"fullName":"Mariana Brogden","fullMobileNu":"+1 809 931 7504","email":"mbrogdens@gov.uk","signupData":"2024-01-25"},
    {"id":30,"fullName":"Helaine Tunbridge","fullMobileNu":"+63 518 227 6419","email":"htunbridget@jugem.jp","signupData":"2024-06-19"},
    {"id":31,"fullName":"Randie Sails","fullMobileNu":"+595 473 493 8555","email":"rsailsu@github.com","signupData":"2024-06-18"},
    {"id":32,"fullName":"Elvin Clandillon","fullMobileNu":"+1 202 521 6094","email":"eclandillonv@japanpost.jp","signupData":"2024-12-11"},
    {"id":33,"fullName":"Eloisa Kinkead","fullMobileNu":"+505 113 882 0641","email":"ekinkeadw@miitbeian.gov.cn","signupData":"2024-09-03"},
    {"id":34,"fullName":"Dalt Champneys","fullMobileNu":"+231 966 792 4282","email":"dchampneysx@altervista.org","signupData":"2024-06-13"},
    {"id":35,"fullName":"Catharina Scutchin","fullMobileNu":"+62 583 380 5907","email":"cscutchiny@instagram.com","signupData":"2024-12-04"},
    {"id":36,"fullName":"Nancy Saberton","fullMobileNu":"+62 134 703 0835","email":"nsabertonz@shinystat.com","signupData":"2024-10-17"},
    {"id":37,"fullName":"Cate GiacobbiniJacob","fullMobileNu":"+62 174 648 2509","email":"cgiacobbinijacob10@xing.com","signupData":"2024-11-21"},
    {"id":38,"fullName":"Shelley Cockney","fullMobileNu":"+30 238 839 3653","email":"scockney11@washingtonpost.com","signupData":"2024-10-24"},
    {"id":39,"fullName":"Marji Bonde","fullMobileNu":"+7 956 926 9394","email":"mbonde12@spotify.com","signupData":"2024-09-30"},
    {"id":40,"fullName":"Kyle Lorenzini","fullMobileNu":"+355 533 320 8598","email":"klorenzini13@yahoo.co.jp","signupData":"2024-10-08"},
    {"id":41,"fullName":"Prinz Barnaclough","fullMobileNu":"+33 325 106 6419","email":"pbarnaclough14@furl.net","signupData":"2024-05-23"},
    {"id":42,"fullName":"May Tew","fullMobileNu":"+62 279 180 3387","email":"mtew15@woothemes.com","signupData":"2024-01-31"},
    {"id":43,"fullName":"Xerxes Marsden","fullMobileNu":"+351 182 697 7523","email":"xmarsden16@friendfeed.com","signupData":"2024-10-04"},
    {"id":44,"fullName":"Winnifred Shireff","fullMobileNu":"+86 116 672 7164","email":"wshireff17@cam.ac.uk","signupData":"2024-07-03"},
    {"id":45,"fullName":"Mina Pidon","fullMobileNu":"+1 502 218 9939","email":"mpidon18@comsenz.com","signupData":"2024-09-03"},
    {"id":46,"fullName":"Garvy Kinnard","fullMobileNu":"+62 445 634 7815","email":"gkinnard19@baidu.com","signupData":"2024-06-06"},
    {"id":47,"fullName":"Cleopatra Ciccarello","fullMobileNu":"+351 581 648 8035","email":"cciccarello1a@arstechnica.com","signupData":"2024-09-14"},
    {"id":48,"fullName":"Tana Hazael","fullMobileNu":"+48 548 497 8705","email":"thazael1b@google.de","signupData":"2024-09-06"},
    {"id":49,"fullName":"Lurline Weedon","fullMobileNu":"+33 833 951 7431","email":"lweedon1c@noaa.gov","signupData":"2024-07-25"},
    { "id": 50, "fullName": "Cindie Tathacott", "fullMobileNu": "+52 353 604 7122", "email": "ctathacott1d@blog.com", "signupData": "2024-07-31" }]
    

export const getUsers = function (page, limit) {
    let array = [];
    for (let i = (page - 1) * limit; i < (page * limit) && users[i]; i++) {
        array.push(users[i]);
    }
    return array;
}
    
export const getLength = function () {
    return users.length;
}