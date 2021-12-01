'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "89ff517324fa53875dfb3835b14d8d1a",
"assets/assets/flutter_i18n/en.json": "40a2d0232bac6c9d1f20c0fe6362ee87",
"assets/assets/flutter_i18n/vi.json": "183ea086e6a49c20b976699517a82739",
"assets/assets/icon/activate_shortcut.svg": "f82f6625c78e3f6505d44bca76f07474",
"assets/assets/icon/chat.svg": "0f05745d25a425e791878a918c6d9097",
"assets/assets/icon/chat_selected.svg": "0522687c8f58caa07814561f47bb2579",
"assets/assets/icon/cinema.png": "4cf607a6e3be4692d8ef93f5f0e1239c",
"assets/assets/icon/connect_shortcut.svg": "66fc4362796f25bf4dc7c18f09e80e39",
"assets/assets/icon/game_shortcut.svg": "4e59cd98847e5c3dbd9b97b7f83212a1",
"assets/assets/icon/group_study.svg": "a818efa0d89191c8bb165a5d08e74d49",
"assets/assets/icon/home.svg": "2b9aaae6215da16fdef033e45a863c39",
"assets/assets/icon/home_selected.svg": "f47c93de66a928eb8645b40f070f23e7",
"assets/assets/icon/ic-menu.svg": "1117e32fc66c23db7719c59f0c71f931",
"assets/assets/icon/icon.png": "c6747c3ca93db6d7b501c803af0852a5",
"assets/assets/icon/ic_arena.png": "76c9a297692119a6241bf88b67e499e4",
"assets/assets/icon/ic_arrow_down_grey.svg": "65db5a959bcd959ca10afa12ac49ce37",
"assets/assets/icon/ic_city.png": "79e69930e35138cbbc0ac8087c1f480d",
"assets/assets/icon/ic_cup.png": "123a86f00d29a9dbaad47b51a6655ab6",
"assets/assets/icon/ic_dictionary.png": "8015c744e40b3ab7258899632b8652ed",
"assets/assets/icon/ic_easy.png": "8567aee104735065db14a8497ae64506",
"assets/assets/icon/ic_edit.svg": "5cf393b43aeb397f199e411054af1c0e",
"assets/assets/icon/ic_headphone.png": "664a119dd799333cebffd791f0c33f36",
"assets/assets/icon/milestone_shortcut.svg": "0f3605d1bbf251249b22611ceb3711f3",
"assets/assets/icon/mission_shortcut.svg": "bbfe80255c4163af047af25440ec2456",
"assets/assets/icon/moon_night.svg": "4d14558393b68e15017b0b61df3ea5a0",
"assets/assets/icon/noti.svg": "b6365386a74dc1be4a7ffcf1a4b2882b",
"assets/assets/icon/noti_selected.svg": "847453ac262e15109562c40f0ed58832",
"assets/assets/icon/profile.svg": "e417f410ead7988edc849b0550ad972b",
"assets/assets/icon/profile_selected.svg": "f70de7ed1db45d0ac27d9a0874053441",
"assets/assets/icon/rank_shortcut.svg": "75a7bce89243996ae61806903a48991c",
"assets/assets/icon/store-all.png": "4ae7408c5e9f66b379512224bcc3094c",
"assets/assets/icon/store-new.png": "0ad0d405cc2027deb2ac361cdc5da490",
"assets/assets/icon/store-trend.png": "14db30932e21dcfa24d4b823c63b8c70",
"assets/assets/icon/store.svg": "0b929b94954348cf98e62bb36af88b6e",
"assets/assets/icon/store_selected.svg": "efe88c96b91067eff8c7184eeaa9d92b",
"assets/assets/icon/video_shortcut.svg": "7fff39227b6932b0f330fa0d44f60189",
"assets/assets/images/1695k.png": "a3445e190bc7fef5719b269b65045350",
"assets/assets/images/395k.png": "950ecd599f0e389db88a907ddd7ab8ca",
"assets/assets/images/895k.png": "45a33a248e71806836c0807523b4e099",
"assets/assets/images/apple.png": "434584c79c7b179b0345e3a9ec4235f7",
"assets/assets/images/app_bg_fullhd.jpg": "f2d9d588d955f69e04c435e608f7cb6d",
"assets/assets/images/app_bg_hd.jpg": "e9ad4d29436de4382f36360a6dfcdb2f",
"assets/assets/images/avatar-unknown.png": "32c2527e33f50d3e639286edd1c83a52",
"assets/assets/images/bg.png": "e49d26917632d352cc92082440aee4b2",
"assets/assets/images/book.png": "5efd681b9cf69153c2f8b093c7e7cbed",
"assets/assets/images/calendar.png": "ec993a0baab275186056db019bfab713",
"assets/assets/images/character/0.png": "9623dba3d6f6932701b782dedf318680",
"assets/assets/images/character/1.png": "2bef761a0249ade9ebaa8af373d498d8",
"assets/assets/images/character/2.png": "05ac31938fc403cf9acc8703a0784d21",
"assets/assets/images/character/3.png": "e3c29275a3d0751abeaa5ceed139e1ec",
"assets/assets/images/character/4.png": "bd131a19639c9021b1f482c0bceda1bd",
"assets/assets/images/character/5.png": "3a2560c9f40f36c84a14eb0450aaa98f",
"assets/assets/images/character/6.png": "b8b8effe6b0d7a00984d285157767ee7",
"assets/assets/images/character/7.png": "64257924c8d80f1805e1cab0f88a25d8",
"assets/assets/images/checklist.png": "8eaef0d7d7c768d053b599bc8ce0ed42",
"assets/assets/images/checklist_blue.png": "58da8f642df34581ad369823017711a2",
"assets/assets/images/city-bg.png": "5b0ed9b8ecf7cb0bb1b9ca1b5c27a737",
"assets/assets/images/contest-bg.png": "b43f41d845e2f3f15a2771436fe8a4d5",
"assets/assets/images/contest-points-bg.png": "8206fc2f8afb72962935ee89a76dcbf5",
"assets/assets/images/cup.png": "ddd012b960e695265996156e9f0e326f",
"assets/assets/images/customer.png": "fce931efa1234cd4d903d1992d3ba290",
"assets/assets/images/disk.png": "9c018c8176508429c50b9407fd0d41d9",
"assets/assets/images/dummy_file.png": "f5a2342a30555faad0dc66a5f70ba8ed",
"assets/assets/images/ecoin-hight.png": "4847fda4892ca6fbb33c86f4c345d429",
"assets/assets/images/ecoin-low.png": "2a8e884e49373e2f6119384b5c4eb65f",
"assets/assets/images/ecoin.png": "b6e3d710aa0bbb3b4e125fdf055dfb0a",
"assets/assets/images/ecoin_3D.png": "40ebae8876d0da393bc5925f35dec59d",
"assets/assets/images/edit.png": "06d93d0318b08b0fa2f75651fa761e3f",
"assets/assets/images/exam.png": "b84b863ea2bb20a03d1f7c811eb3ca74",
"assets/assets/images/facebook.png": "1cde1cebc15e838ecc12fcefc2e46215",
"assets/assets/images/fb-group-banner.jpg": "84f1e974290807909e88c61ca27c26d8",
"assets/assets/images/fb-group.png": "ac9b8fe4ebca4a3f8f6c211a0106cd6b",
"assets/assets/images/full_facebook.png": "8b3d5e5a81e4c5b1e31f7f3740fba1df",
"assets/assets/images/full_google.png": "929b9d302d868acb55def4704d2af998",
"assets/assets/images/full_phone.png": "9ed8f7476fbaa69635023d7e53754855",
"assets/assets/images/game-cloud.png": "0cf0f660b6702bd9eb4889b187d5b97c",
"assets/assets/images/game-ecoin.png": "213b235c7c4344196ba28b15a5a5522d",
"assets/assets/images/game-machine.png": "cb72d480e830b9b7a58d4a69f0fd40e0",
"assets/assets/images/game-notice.png": "c89db4fa77f07dc27c809fc1b0237369",
"assets/assets/images/game-spin.png": "3269ca1b92fc39eec102601f2d296f56",
"assets/assets/images/gift-box.png": "0cbfa3c5be06e06f27743e7daf74ef17",
"assets/assets/images/Group-2190.png": "5b0afcf99741fb6aec1b193449afe7e2",
"assets/assets/images/group_0.png": "5e8f6d2b4c7233337477e1e169f399e5",
"assets/assets/images/group_0_disable.png": "37555f45ff0a7a2b638294e6fc1f2440",
"assets/assets/images/group_1.png": "b261af27040d8705e78dcfab3f0cec60",
"assets/assets/images/group_1_disable.png": "4b69f86d0073bf4b539ce7961011af17",
"assets/assets/images/group_2.png": "9e7c48e2c3e3fe552187b68190440383",
"assets/assets/images/group_2_disable.png": "ef4d3d991302448be97da4b2cf623787",
"assets/assets/images/ic-tense.svg": "9bbc572a42a641ccf9ad315cf4b1bc5e",
"assets/assets/images/interview.png": "1c619a67be558dc56467ecba9327ed2d",
"assets/assets/images/license-success.png": "41308643807d50f3f7e877b112bf3999",
"assets/assets/images/logo.png": "96950e7eb4730542f8a609f83c20c75b",
"assets/assets/images/logo_trans.png": "72c94668c983f51d74ece7d536a157c4",
"assets/assets/images/mask-bg.png": "43d5aebc4935b28263f992ee169b1854",
"assets/assets/images/messenger.png": "ceab2002a77164194cafc91fd5d38880",
"assets/assets/images/money.png": "0110e175dfcd108a560e483abdb5afb5",
"assets/assets/images/phone.png": "fa6446d583b1cfff7960a4506df2320b",
"assets/assets/images/popup-bg.png": "bf0af4ccd9d88b73ebd643ac3e74c8d8",
"assets/assets/images/prize_win.png": "1bd505694277ce53666c72599a5d5622",
"assets/assets/images/progress.png": "29a44108e61718e25752b80e7a114793",
"assets/assets/images/rank-1.png": "4f66aee90449865a43f9db3f77066286",
"assets/assets/images/rank-2.png": "a598382534fd01c6cb7d1163424d6428",
"assets/assets/images/rank-3.png": "948c8048cf24d92ee20e07ed7342959a",
"assets/assets/images/ranking.png": "30e86b90963b3f9324b69179a83a1d7b",
"assets/assets/images/roulette-8-300.png": "506019e116889d429a893b08dc00fb38",
"assets/assets/images/roulette-center-300.png": "87c16358ebbb624daa25e2e4985bf23e",
"assets/assets/images/scan.png": "2d7ecde8f22f9c8566a6e8b834316971",
"assets/assets/images/test.jpg": "9ce6ca71a8d8fa0511676a746aa69a76",
"assets/assets/images/trophy.png": "23ad67491d9c7f88f990e6b069eb5ec4",
"assets/assets/images/user_gray.png": "a2516af42447af666e2e4b091c13a29d",
"assets/assets/images/way.png": "78bf49d3fbff7d7a68a0a6f10b81e6d0",
"assets/assets/info/about_me_bg.png": "bc638be667c6c70420c0f75b637934cb",
"assets/assets/info/contact_me_header_bg.png": "75105e12b5e64b2d99a33108c338b864",
"assets/assets/info/email.png": "951f52a10d902a95cfb4d0d7a5801738",
"assets/assets/info/facebook.png": "a800a240a1fa95e74233233ad59fd9db",
"assets/assets/info/icon_point.png": "a9a8a477b77d50269d9a667288411baf",
"assets/assets/info/phone.png": "08a41608b9bd59c23bf8356cc63772ad",
"assets/assets/logos/logo2176_3x.png": "7160db29bb0c7b78a0d337966ed3bcc4",
"assets/assets/lotties/boxland.json": "5e780a2703191f43595d08efdde23378",
"assets/assets/lotties/boxopen.json": "05ae8a96dd95a646472c18b70e3a157e",
"assets/assets/lotties/chest-opening.json": "aa36f9958419d8f28f951213cfe46cf4",
"assets/assets/lotties/confetti-banner.json": "d113b0ee5e1b850fdef5e88c70ef5d52",
"assets/assets/lotties/construction-site.json": "cffca3a23ff67b85651c8d8935615d5d",
"assets/assets/lotties/glow.json": "7c68f4778f8381bf511252da21d8b73b",
"assets/assets/lotties/listening-vocabulary.json": "fc386c45f3ab2bb49dd6b48dec705f6c",
"assets/assets/lotties/listening.json": "93bc2b550d1d1009151b713022e04cfa",
"assets/assets/lotties/right_1.json": "05c9dba037cb59c0dc8c4c9c88cbd35b",
"assets/assets/lotties/right_2.json": "4eb21f0d0090e1ec23716b72a3bad351",
"assets/assets/lotties/right_3.json": "21d2123834b0c897bc343be7f3d306c3",
"assets/assets/lotties/wrong_1.json": "a1f59aba03763f8fc3218771bbe489d6",
"assets/assets/lotties/wrong_2.json": "2fc4d851bbd28ef62369fb2ab0639c56",
"assets/assets/lotties/wrong_3.json": "c83ab5a5f3e8ccfbb3cd66b5686601c8",
"assets/assets/menu/ic-chat.svg": "0b0a160ad91f5f86d1ff2362bbd1bab6",
"assets/assets/menu/ic-class.svg": "c19e53e782591d735a3025da9e56383b",
"assets/assets/menu/ic-compete.svg": "1e71d699e4801560778bd03b825cdf11",
"assets/assets/menu/ic-home.svg": "a82057b636ad5bbca653acea9787e315",
"assets/assets/menu/ic-market.svg": "018c851e0f91caf33eda7a15464b3fbe",
"assets/assets/menu/ic-notification.svg": "6537d19ddbb38bd8b08effbc0bf0d28d",
"assets/assets/menu/ic-profile.svg": "d48beb4905efe0a3852a2139b70dbe4c",
"assets/assets/menu/icon-menu.png": "ff496c7bf0c33b9c75a4c37d446086c1",
"assets/assets/pages/home_page/abc.svg": "deae397871be9cdf5c9a27a93821fd21",
"assets/assets/pages/home_page/class.svg": "a8f2caa397e166a574b6aca96c0efbb9",
"assets/assets/pages/home_page/exam.png": "a13f41550d23323bf96632ff853add52",
"assets/assets/pages/home_page/exam.svg": "ff1ecbc096c52fcc9b6312d657704df4",
"assets/assets/pages/home_page/exams.png": "c46580e190a200287e8f29c3e6000648",
"assets/assets/pages/home_page/homework.png": "137e33a010c7af67ecc5e436751e058c",
"assets/assets/pages/home_page/homework.svg": "66a63ac37788485caba5f8f7345bbf7c",
"assets/assets/pages/home_page/ic-grammar.svg": "932b8928381526d3ce125018a20d8d73",
"assets/assets/pages/home_page/ic-group.svg": "59571fed57eba3c841d985f52677e429",
"assets/assets/pages/home_page/ic-next.svg": "80d3594a48aafedce4aa6f2ea8cbc3eb",
"assets/assets/pages/home_page/ic-player.svg": "9485198d623f2eb989024edebb1d968d",
"assets/assets/pages/home_page/ic-thongke.svg": "cd5a045a569b14f070bb16b448e0c3af",
"assets/assets/pages/home_page/ic-thumsub.svg": "14692eb4985bb804c44e1a3fc96d211a",
"assets/assets/pages/home_page/ic_abc.svg": "274e5ebd86f48fc41b36f2eb57044444",
"assets/assets/pages/home_page/ic_book.png": "2a9b648114455d1cca37a4a3fb837b86",
"assets/assets/pages/home_page/ic_call.svg": "51e0525617c8df339556dcba32767317",
"assets/assets/pages/home_page/ic_exam.png": "5fa2e54c26150f9537d8a779d60157ad",
"assets/assets/pages/home_page/ic_flash.png": "b15ea687eed74e3e724e0bf05e57ea1d",
"assets/assets/pages/home_page/ic_grammar.svg": "8d4f8501bb7653521220fbe25a5d1359",
"assets/assets/pages/home_page/ic_info.svg": "5facfcb1433e864510a4b86844ae34ba",
"assets/assets/pages/home_page/ic_listening.svg": "9eb0996c412c0693d21c3a98d3ac3bb5",
"assets/assets/pages/home_page/ic_lock.svg": "1a4e1778c2fcf9843c7cbf5813ccf9d7",
"assets/assets/pages/home_page/ic_paper.svg": "8f1e376ff49ed90c00e234bf39950bf6",
"assets/assets/pages/home_page/ic_pencil.png": "328cdad34a154f6d270b5cc50d03c1aa",
"assets/assets/pages/home_page/ic_speed_bubble.svg": "3e98a88972303a90384121e6a6470c50",
"assets/assets/pages/home_page/join-exam.png": "f3e8d73e3e1f0521589e36274719c348",
"assets/assets/pages/home_page/join-exam.svg": "03b7d9b277eb1bdae909db1ecff0cac2",
"assets/assets/pages/home_page/lock.svg": "c46927c287d235fd56b1613e61aceba9",
"assets/assets/pages/home_page/play-button.svg": "a3efa02a3e7490e38ef3e08db1c16903",
"assets/assets/pages/home_page/rank.png": "b440309cfefe7af0c2f7894a7e11a956",
"assets/assets/pages/home_page/school-book-bg.png": "5b0ed9b8ecf7cb0bb1b9ca1b5c27a737",
"assets/assets/pages/home_page/school-book.png": "2a154980894a60b8bdae2238ceb455e1",
"assets/assets/pages/home_page/school-book.svg": "dc73885563a612dbb084bf6db0bb3708",
"assets/assets/pages/home_page/speech-bubble.svg": "aa980f5b34355672d2133c5f200cd174",
"assets/assets/pages/home_page/video-exam.png": "c3a787ccecd807d83df88b2ebb637287",
"assets/assets/pages/home_page/video-exam.svg": "5d15c7d1aae3c750af860a24f173008c",
"assets/assets/pages/home_page/video.svg": "5d15c7d1aae3c750af860a24f173008c",
"assets/assets/pages/home_page/video_new.svg": "a00eb9606e137535f8371b03f86420cb",
"assets/assets/shortcuts/activate_shortcut.svg": "6d39a13d437ebc33d8a1940de109fdb8",
"assets/assets/shortcuts/connect_shortcut.svg": "15e252ff42724a00f808f9bff4fadf41",
"assets/assets/shortcuts/game_shortcut.svg": "6d3a8e85bcfe821a755b9089c08dc1d1",
"assets/assets/shortcuts/game_shortcut_coming_soon.png": "29590eeb6b8ee209820d07544f1daae8",
"assets/assets/shortcuts/milestone_shortcut.svg": "e44e5b62dfd4ed6430e96724c0e7762c",
"assets/assets/shortcuts/mission_shortcut.svg": "c51453eb64b27333f4576316b9a711f4",
"assets/assets/shortcuts/mission_shortcut_coming_soon.png": "89ab34fae89d2ec4429e8d4a02681c11",
"assets/assets/shortcuts/mission_shortcut_coming_soon.svg": "bbfe80255c4163af047af25440ec2456",
"assets/assets/shortcuts/rank_shortcut.svg": "a0bd8d0f907fbc86e56e28616c95996c",
"assets/assets/shortcuts/video_shortcut.svg": "acb6b6d9af18230757502b6e7557fef6",
"assets/assets/sounds/correct.m4a": "b539317edeeef60e8359e5cbd1f1d9a9",
"assets/assets/sounds/correct.mp3": "4552555eda35f65b0acc7c70bdec0ce1",
"assets/assets/sounds/speech_to_text_cancel.m4r": "c9c150d476ffc48d27353579ccabc7fa",
"assets/assets/sounds/speech_to_text_listening.m4r": "58331d4dbddcf4b7d0c4207e9d1a3a67",
"assets/assets/sounds/speech_to_text_stop.m4r": "80bc081cf87af7b6a5d94c6dbd0b1224",
"assets/assets/sounds/wrong.m4a": "55e15f29e046d5465f95b0e7e0145f53",
"assets/assets/sounds/wrong.mp3": "ffd538bc6ffc3a917a5b4c133f1912b4",
"assets/assets/web/ic-apple.svg": "8d369c7267350cd17248039cdb53f9ee",
"assets/assets/web/ic-fb.svg": "be85ef964dac25bd14fded57f2325e10",
"assets/assets/web/ic-google.svg": "bda51c26c14eadeda2e5de8ae18819f3",
"assets/assets/web/ic-play-audio.svg": "7336dcea3204fafd90a6854d9224832e",
"assets/assets/web/ic-volume-down.svg": "904c1621f576f0e59f50a68cfab78bd3",
"assets/assets/web/ic-volume-up.svg": "0ed226466d75f8fa8b609a23f1b041a9",
"assets/FontManifest.json": "cd62f48f65e6c7a7d04db627893c0757",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SVN-Gilroy-Bold.otf": "83a4e50a248e2b9da6b2e6802834646d",
"assets/fonts/SVN-Gilroy-Light.otf": "500ee3f8d1beb34b515976e9b27e3706",
"assets/NOTICES": "5aa19385600b777e729e9553ed10d6e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/meedu_player/assets/icons/fast-forward.png": "4b90931155b96f781590fd2e9ffceef8",
"assets/packages/meedu_player/assets/icons/fit.png": "e6ba4c78e9de2bfc134a0ffeb8518cb2",
"assets/packages/meedu_player/assets/icons/fullscreen.png": "8a040d2380f58e3b8f33ee728fd84e24",
"assets/packages/meedu_player/assets/icons/minimize.png": "b3856b8a8c4d30067ef749aff9c820d0",
"assets/packages/meedu_player/assets/icons/mute.png": "d70bed3cdfb3296efbe4de06e6dfed47",
"assets/packages/meedu_player/assets/icons/pause.png": "a8ddf81addcb6e7408868015d7afe035",
"assets/packages/meedu_player/assets/icons/picture-in-picture.png": "c221b185a9d8c6d2b2c9b6776fa550ba",
"assets/packages/meedu_player/assets/icons/play.png": "f93523daf337c51131913acae4889a2e",
"assets/packages/meedu_player/assets/icons/repeat.png": "9dfe3bbcbefb4b746a145bde57a71bff",
"assets/packages/meedu_player/assets/icons/rewind.png": "235a7d4b69b461128ddf04389d7d3fda",
"assets/packages/meedu_player/assets/icons/sound.png": "530661df012ed13bee07ab2d3b874777",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/App-Icon.png": "1a8bb77ac556f5e167e456d394335068",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b625cdb60dc2c0cb84a080482d87c4c",
"/": "2b625cdb60dc2c0cb84a080482d87c4c",
"main.dart.js": "fb37da0b3f5f3edd5205a99721047ab2",
"manifest.json": "ad7c693cab3c5dc9a84865e6d2e03835",
"version.json": "b38a4a92c49fb8b846f177e15105b731"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
