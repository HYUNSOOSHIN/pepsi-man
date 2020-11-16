import { createAction, handleActions } from "redux-actions"

// action type
const SET_ALBUMS = "@PEPSI-MAN_WEB/COMMON/SET_ALBUMS"
const SET_ALBUM = "@PEPSI-MAN_WEB/COMMON/SET_ALBUM"
const SET_TRACK = "@PEPSI-MAN_WEB/COMMON/SET_TRACK"

// action
export const setAlbums = createAction(SET_ALBUMS)
export const setAlbum = createAction(SET_ALBUM)
export const setTrack = createAction(SET_TRACK)

// init state
const initState = {
  albums: [
    {
      albumSeq: 0,
      albumNo: 1,
      title: "Benefits",
      artist: "Zior Park",
      imageUri: "https://cdnimg.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/049/330/81049330_1522662102633_1_600x600.JPG/dims/resize/Q_80,0",
      releaseDate: "2018-04-03",
      track: [
        {
          trackNo: 1,
          title: "Benefits",
          lyrics: `One thing I realized
          All Behaviors only for benefits 
          Yeah all for the benefits
          Whatever good or bad
          Who cares, nobody
          I want some benefit
          I want ma benefits
          
          I wanna open yours 
          Pop pop pop it
          Your Smile face 
          ta ta ta tatted
          I know you 
          la la la lying
          Why you hide it
          
          People make baby for greed
          Everybody know this 
          world hard to breath
          But Some people make 
          a baby to be mom
          Or Some people through 
          sex for one night
          
          We call it accident
          how coincidence
          Somone chose delete 
          But if you feel guilty
          the you give a birth
          It's all for the benefit, 
          why we dont give a fuck
          
          God brang the galaxy
          He want some blessing 
          I think he selfish
          Human no choices 
          to live in his legacy
          His jealousy make 
          people be tested
          
          Peace, Love and birth and war
          Benefit is headwater
          All of emotion's headquarter
          Same goal Voldemore
          and Harry Potter 
          
          One thing I realized
          All Behaviors only for benefits 
          Yeah all for the benefits
          Whatever good or bad
          Who cares, nobody
          I want some benefit
          I want ma benefits
          
          I wanna open yours 
          Pop pop pop it
          Your Smile face 
          ta ta ta tatted
          I know you 
          la la la lying
          Why you hide it
          
          I pray for the benefits
          I move for the benefits
          I look for some benefits
          But why i act like selfless
          
          I hate that word 'selfless'
          They just hiding selfishness 
          I dont give a shit
          And they just green 
          hand for hiding it
          You know we all same 
          just wanna get benefits
          
          Kimmy got five stars
          for Z’ reputation
          But Judy got half star
          for Z’ reputation
          Same night sky but its different
          views where you seeing
          You need to understand 
          ma metaphor 
          Don’t need to understand 
          this epilogue
          
          One thing I realized 
          All behavior only for happiness
          Whatever good or bad
          Who cares nobody 
          I want some happiness
          You want some happiness 
          
          All we've done is for benefits
          It could be badness to the others
          All of the nature move 
          for the benefits
          Even there heaven's father
          
          All of you wanna be lighter 
          God and we chase samething 
          All of you chase the 
          benefits to get the
          motherfuckin happiness`,
          mvUri: "https://youtu.be/nRMDY-VGowI",
        },
      ],
    },
    {
      albumSeq: 1,
      albumNo: 2,
      title: "Beautiful",
      artist: "Zior Park",
      imageUri: "https://cdnimg.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/108/998/81108998_1541066067486_1_600x600.JPG/dims/resize/Q_80,0",
      releaseDate: "2018-10-05",
      track: [
        {
          trackNo: 1,
          title: "Beautiful",
          lyrics: `You told me that I'm so twisted
          Negative vibes only
          You told me that Im so stupid
          I know ma stance make 
          you look selfish 
          
          If I don't know
          ‘bout your details
          I could think about it 
          as typical mistake
          Don't beg me respect
          Big madness for ya 
          it's full in this mixtape
          
          Boo ! I'm like boogie man
          I feel like a villain on this land
          Boo ! Booby trap
          Ma lady never let me 
          go from this bed
          
          I could just blow it
          out of proportion 
          I ain't never lie though
          I just told ya just the way it 
          likes I saw you know
          
          When I glance it
          It so nice beautiful 
          When it closer
          It so fucking disappointed 
          
          When I glance it
          It so nice beautiful 
          When it closer
          When I glance it
          
          Blur ma sight lord
          It's beautiful
          Dark world rather than here
          It taught me how you fool
          
          Blur ma sight lord 
          It's beautiful
          Dark world rather than here
          It taught me how you fool
          
          Take off ma glasses
          Devil's stretching 
          Give me some blessing
          What are you waiting
          What are you waiting 
          Why are you hiding
          huh huh?
          
          Take off ma glasses
          Devil's stretching 
          Give me some blessing
          What are you waiting
          What are you waiting 
          Why are you hiding
          huh huh?
          
          I could love your ugly face
          Even you got scar face
          Don't tryna close
           to me like them
          I wanna keep
          you at arm's length
          
          Friends why you change 
          your stance again
          In this game,
          I'm Steven Yeon 
          all around bitches 
          walkin' like a dead
          
          When I glance it
          It so nice beautiful 
          When it closer
          It so fucking disappointed 
          
          When I glance it
          It so nice beautiful 
          When it closer
          When I glance it
          
          Blur ma sight lord
          It's beautiful
          Dark world rather than here
          It taught me how you fool
          
          Blur ma sight lord 
          It's beautiful
          Dark world rather than here
          It taught me how you fool`,
          mvUri: "https://www.youtube.com/watch?v=sK1hxwuq5bA",
        },
      ],
    },
    {
      albumSeq: 2,
      albumNo: 3,
      title: "Noise",
      artist: "마미손 & 김승민 & 원슈타인 & Zior Park",
      imageUri: "https://cdnimg.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/205/463/81205463_1557743451554_1_600x600.JPG/dims/resize/Q_80,0",
      releaseDate: "2019-05-14",
      track: [
        {
          trackNo: 2,
          title: "Noise",
          lyrics: `Noise make u stupid but I like it
          Glow make u blind but u still smile
          Sold all of Fake brand but u like it 
          Blow up your mind with ma fucking noise
          
          케네디 케네디 존 미국의 대통령이죠
          마미마미마미손 유튜브 초통령이죠
          핑크퐁
          핑크퐁은 꺼져있어
          텔레비텔레비젼 
          악당들이 지랄중이죠
          악당들이 지랄중이죠
          매일듣는소식에 내 귀 중이염
          Boo!
          희극에서 제일어려운 역할은 바보역이고
          그 배우는 바보 아니라구
          엄마손
          엄마손은 약손
          케네디 케네디 존 미국의 대통령이죠
          
          i'm a freak girl, 마치 N.E.R.D
          don't fuck with me 난 맨날 카니발 뒤
          술자리 첨 보는 여자가 strangers
          니 의사 쌩까고 꾸려 Avengers
          from the bottom of my chest 
          to my stomach 
          Gucci, Fendi 뭐 whatever 말아 소맥
          내가 누군지 모르겠으면 파봐 playlist
          여간해서 받기 힘들지 여자들 hate 이 
          if ya don't know me by now 꺼져
          25 young rich boy 벌어
          니가 여자라면 지갑 넣어둬
          수지 타산 중요하지 쓴 만큼은 벌어 더
          근데 얘네 봐봐 자꾸 기울어 더 
          이익인지 아닌지 좀 따져 넌 
          i will not fall, even tired
          맨날 시켜 금에 가열
          
          Noise make u stupid but I like it
          Glow make u blind but u still smile
          Sold all of Fake brand but u like it 
          Blow up your mind with ma fucking noise
          
          Can't deny noise 
          Can't blame ur noise
          Bitch u had no choise
          Did I make u pause? (x2)
          
          Gentlemen ladies . 
          Would you get the fuck out of here ?
           나갈래 나갈래 난 사는 세상이 different
          Charming she's charming
          I see you have a lot of meme ,
          가볍데 가볍데 내가하는 말과 행동이
          눈치용 헛기침 케케켁 컥
          원슈. 제발 manners maketh man. Huh
          간지나는 소음 디셉디콘
          넌 강아지처럼 걍 지리고말아
          새벽두시 옆집 pick up the phone
          너넨 이해못해 피카소 그림
          예민보스 애들 피꺼솟?  
          Not Dyson. becaues I got
          
          I got a flight ticket
          This land too small
          I got new type bidness
          Baking super noise
          You like a type beat
          It sounds fucking boring 
          People love noise
          People love fucking ghost
          Bitch u afraid to jump in the fog
          Syndromez hit the ball
          Bitch u upset wit that noise
          U realized u been fucking fooled 
          Okay 벌어 미국돈 
          pink condom Mommyson 
          Okay boss ! deaf  blinde dude they all set
          
          Anyone else have to be done
          그냥 샤라웃투미 난 막걸린데 스파클링
          니네 사소한 버킷리스트 
          이루어보기엔 다틀림
          오 난 바오밥 트리, 쟤네는 작아 브로콜리
          밤새서 눈이 뻘게짐 마치 드라큘라 써클렌즈
          원슈 properly 랩으로 가지 버클리 
          원하는 것은 trying to get , 
          못가져도 괜찮은게
          내 옆을봐라 패밀리 시대를 아우르는 힘
          2000년대 리차드 기어 
          
          Fake bitches wanna Louis v bag
          OffWhite shirt for sure u  already dead
          Fake bitches wanna saint Laurant
          Polo shirt for sure already dead (x2)
          
          yeah i'm riding 니 선배 머리 어디 위
          saucing in the city 혼자 with no 비리 
          니네는 이 기분을 모르지
          never snapchat 맨날 뛰어 두 탕, 
          될 것만 같아 Usain
          Lotta hundreds 좀 불쌍해 
          난 질렀어요 큰 거 두 장
          uhm what you talkin' about? 
          아 맞아 내 enemies
          그 개놈이 난 mannerism 
          어쩌고 쌍엿 날렸지
          다음 시즌 착장이 바뀔 때면 난 major지
          shout out to beautiful 
          우리 guarantee는 개매너지
          
          응 니 엄마 장갑 마미손
          내 다음 콜라보는 너희 어머님과 
          김장철이란 싱글
          김치힙합 싹 담궈 버리게 
          자랑스런 아들 넌 바삐 손가락 키-보드 위
          서커스면  공중제비돌고
          넌 머리찧고 뒤구르기 
          지랄이났네 지랄이 났어어 
          ㅂㅅㅅ쌍ㄱ
          창의력 에디슨 같은새끼 
          니 머리위 전구 띄움
          야 fuck boys   better watcht  두배로
          난 불어난 페이! 받으러 가
          카니발 두대로 beautiful noise
          
          Fake bitches wanna Louis v bag
          OffWhite shirt for sure u  already dead
          Fake bitches wanna saint Laurant
          Polo shirt for sure already dead (x2)`,
          mvUri: "https://www.youtube.com/watch?v=kfHhJHwaARk",
        },
      ],
    },
    {
      albumSeq: 3,
      albumNo: 4,
      title: "THUNDERBIRD MOTEL",
      artist: "Zior Park",
      imageUri: "https://cdnimg.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/403/157/81403157_1585548450895_1_600x600.JPG/dims/resize/Q_80,0",
      releaseDate: "2020-03-30",
      track: [
        {
          trackNo: 1,
          title: "THUNDERBIRD",
          lyrics: `Look at there new THUNDER falls
          Look at there new rain pours
          Who’s there man, god or ghost? 
          No need to pray, only drugs
          
          Obsession about my dream 
          It’s going lunatic like a Louis the 14th
          My mental’s like a Versailles I built
          Shadow’s so dark for light 
          
          My palace is occupied
          By old smell dogs, it’s time for hound
          When it’s over this testing time
          I’m looking for land to die
          
          A bird on a tree you know how I feel
          A white oak tree you know how I feel
          Why I’m still here 
          I made my mind to leave here
          Sweet my Jesus am I still your sheep?
          
          There’s a bird on a oak tree 
          they’re both crying for awhile 
          There’s a boy watching them 
          thru a lil scope for awhile 
          There’s a bird on a oak tree
          they’re both crying for awhile 
          There’s a boy watching them 
          thru a lil scope for awhile
          
          (Somewhere over 
          the thunder way up high
          There’s a land that I heard of 
          once in a lullaby
          Somewhere over the thunder way up high
          There’s a land that I heard of 
          once in a lullaby)
          
          (OPENING)`,
          mvUri: "",
        },
        {
          trackNo: 2,
          title: "TOMORROW",
          lyrics: `Wanna smile It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent 
          
          I wanna smile It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent
          
          Smile face can’t maintain
          My old pain my new pain 
          I know the money therapy is the best
          I guess you don’t care about that way
          
          Not today, I wish I could understand 
          your test like a David
          Not today,  I will be tamed by 
          your game like a David 
          For today I'm on other campaign
          New candidate of new David 
          Versace chain on my neck
          I’m obsessed with it snakes surround me
          
          My perfume did it bring them to me?
          Call of duty they think me cocky
          Make couple of enemies everyday
          They’re always jealous of 
          my whole new plan 
          Don't make this atmosphere 
          awkward Amen
          
          I’m just a human 
          how could I know plan of your business
          But tomorrow I will may know 
          what you tryna do to me
          They call me fantasy man 
          they deny my new big dream 
          Today here’s nothing I can do 
          I’m still balling 
          
          Wanna smile, It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent 
          
          I wanna smile, It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent
          
          Siren ringing all the time
          Sensitive mind O my god
          Can’t stop THUNDER on my mind
          I’m looking for a land to die
          
          My friends I can’t take a rest
          Like them I don’t give a f**k about today
          Lil wayne changed my drape
          My brain ain't stop the fan 
          I’m going f**king mad
          Is it f**king bad?
          
          I’m just a human 
          how could I know plan of your business
          But tomorrow I will may know 
          what you tryna do to me
          They call me fantasy man they 
          deny my new big dream 
          Today here’s nothing I can do 
          I’m still balling 
          
          Wanna smile, It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent 
          
          I wanna smile, It’s gon’ be tomorrow
          Need to feel sorrow keep it inside
          Keep it high for now leave me alone
          Don't ring the alarm leave me silent
          
          Now you shine my problem
          It shines like diamond
          who can miss light
          
          Satan gave me bride
          I took it more ten times
          I can't blame Judas`,
          mvUri: "",
        },
        {
          trackNo: 3,
          title: "RUN ! DAVID, RUN !",
          lyrics: `Run David
          Run David 
          Run David
          David run ! 
          
          Run David
          Run David 
          Run David
          David run ! 
          
          Running on the mountain 
          How long you will be silent
          Enemy’s close they pray for same list
          
          What’s in my fountain
          This party, can’t count on ‘em
          Everything seems like 
          Poison chalice 
          
          Run David run
          There’s nothing is yours
          My enemies they enjoying
          I can’t stop this THUNDER
          
          Run David run
          What you waiting for
          Perfect environment
          Now I got used to this THUNDER
          
          Run! David run! run! 
          Run! David run! run! 
          Run! David run! run! 
          Run! David run! run! 
          
          I feel like a runner my whole life
          Even I'm not a criminal
          My home town there’s no role model
          Do you think I am arrogant
          
          Superstar algorithm
          My haters I'm David 
          They all king maker
          God train me like no. 8 of lakers
          American say who the fuck is that stranger
          
          Tell me the reason my lord
          I thought I was almost close
          Maybe It was wrong 
          Maybe even I never been close to court
          
          There’s no answer to run
          Answer is my whole journey
          I need to find your voice
          Among this thousand of THUNDER huh
          
          Cuz I'm a born sinner
          Realized since when I’ve seen her
          Need to run, run, run
          I'm a born sinner
          
          Now I can get Hamlet saying
          Mercedes ain’t important 
          I see two button keep or suicide
          Damn I just wanted to talk 'bout Gucci belt
          
          Gotta go back to states
          Gotta get enough papes
          For promised land you said 
          Here’s no place I can stay
          
          My girl my family my friends and fans
          How tragedy can’t be with 
          their happy ending
          I'm on god’s plan with FILOT standing
          Mr.Blurryface I’m your new david
          
          Oh f**k the love story f**k the paper talk
          F**k the gang shit
          Or maybe those all in it
          Yeah those all in it 
          
          Cuz I'm a born sinner
          Realized since when I’ve seen her
          Need to run, run, run
          I'm a born sinner
          
          Run! David run! run! 
          Run! David run! run! 
          Run! David run! run! 
          Run! David run! run!`,
          mvUri: "",
        },
        {
          trackNo: 4,
          title: "PENGUIN",
          lyrics: `To North Pole
          Keep moving on 
          O oh my lord 
          Why you tryna stop me
          
          My great fantasy is blurry
          My old clothes is buried
          My old documents I burned it
          On the glacier I'm staring at other side
          
          I just signed with the small shop
          Big wings small cage with lil magpies
          Testing just done take it my partner
          Linchpin Mr.Park making new products
          
          Lord distribute my works 
          to the Hollywood
          My igloo’s melting 
          I’ma get house in Malibu 
          New school new typhoon 
          there’s a bunch of coward
          They’re always jealous 
          and afraid of f**kin’ new 
          
          I forgot what was my color
          when I was born 
          I can only see black and white 
          on my coat
          It ain’t complain just saying, 
          would be hard to walk without jokes
          Already my steps funny you know
          
          I’m walkin’ on
          Frozen ground to North Pole
          I’m only one
          Here’s maybe no one knows
          
          Oh oh
          Look at my funny steps
          Oh oh
          I forgot what was my plan
          Oh oh
          F**k off I’m a psychopath
          Oh oh oh oh
          Can’t stop my feet to North Pole
          
          My great fantasy is blurry
          My old clothes is buried
          My old documents I burned it
          On the glacier Im staring at other side
          
          Winter’s coming inside 
          my fantasy’s darken
          My life looks so invaluable 
          but still god keep calm 
          Oh but I’m still cocky 
          oh like Kim Kardashian
          There’s no sign 
          
          Empire state of my mind
          Hollywood of my mind
          Stumble every time like a bird
          Maybe don’t know 
          how to use my arms yet
          
          It’s not a concept
          Goin’ to Promised land 
          Maybe it’s a far from North Pole 
          Need new mindset 
          
          I’m walkin’ on
          Frozen ground to North Pole
          I’m only one
          Here’s maybe no one knows
          
          Oh oh
          Look at my funny steps
          Oh oh
          I forgot what was my plan
          Oh oh
          Fuck off im not a psychopath
          Oh oh oh oh
          Can’t stop my feet to North Pole
          
          To North Pole
          Keep moving on 
          O oh my lord 
          Why you tryna stop me`,
          mvUri: "https://www.youtube.com/watch?v=yDC_qKBHx-k",
        },
        {
          trackNo: 5,
          title: "SLEEPWALK",
          lyrics: `Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          
          Can’t feel anything like ghost
          I can’t taste it my tongue is numb
          Can’t remember not much it was blurred
          But I love those abstract elements
          
          God don't wake me up
          I locked out of my sunken place
          What a blurry flurry land 
          You want me get outta this space 
          
          People love my fake face 
          All In contacts they all snakes
          I should get outta my brain
          If I have to talk with other people
          
          My time is paused all around is old
          The Ball is tossed
          they jump off like a dog
          I don't care it’s too boring 
          I'm the boy who tossed that ball
          I just hope you not a hunter 
          for the fox Mr.Ghost
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold 
          my body’s going numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold 
          my body’s going numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          
          Sleepwalk sleepwalk sleepwalking
          I'm still on god’s plan
          Sleepwalk sleepwalk sleepwalking
          Walking like a David
          Sleepwalk sleepwalk sleepwalking
          Illusion in my head
          Sleepwalk sleepwalk sleepwalking
          The visionary land
          
          Head in the clouds
          I see your THUNDER sign 
          I could listen to your brass
          I'm sure it came from your land
          I'm lying on my bed
          Dust stackin' on forehead
          There’s satan tryna help me
          Then enemies laughing
          
          They may say I'm a dreamer
          They all know I'm a Lennon
          God you need new legend
          Look at there sweet satan 
          
          I hope you not to ring the bell
          No land can stay
          I know u know my name 
          You'd better check your mail 
          
          Illusion in my head foggy in my bedroom
          Watching same shit 
          with my men god assembled
          Hater say it like a gamble 
          I feel they’re jealous
          Nobody could wake me up 
          from my dream it's my palace
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold 
          my body’s going numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold
          my body’s going numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Sleepwalk sleepwalk sleepwalking
          I'm still on god’s plan
          Sleepwalk sleepwalk sleepwalking
          Walking like a David
          Sleepwalk sleepwalk sleepwalking
          Illusion in my head
          Sleepwalk sleepwalk sleepwalking
          The visionary land
          
          I see the ghost I call it lord
          These days I can't feel you oh lord
          Mo' sleeping pills, I suppose 
          Mo' sleeping pills no mo'
          
          I see the ghost I call it lord
          These days I can't feel you oh lord
          Mo' sleeping pills, I suppose 
          Mo' sleeping pills no mo'
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold my body’s going
          numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Lying in a tub I woke up in a bathroom
          Water’s getting cold my body’s going
          numb 
          Who’s knocking door
          Who’s there knocking door?
          
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          Sleepwalk sleepwalk sleepwalking
          
          Sleepwalk sleepwalk sleepwalking
          I'm still on god’s plan
          Sleepwalk sleepwalk sleepwalking
          Walking like a David
          Sleepwalk sleepwalk sleepwalking
          Illusion in my head
          Sleepwalk sleepwalk sleepwalking`,
          mvUri: "https://www.youtube.com/watch?v=-GelpNkPvM8",
        },
        {
          trackNo: 6,
          title: "DISTANCE TO THE SUICIDE",
          lyrics: `Distance to the suicide
          It’s closer than I thought ooh
          6 feet to the window
          
          Whisper from my head inside
          It always gives me choice ooh
          It push me to the window
          
          Distance to the suicide
          Whisper from my head inside
          Wisdom please tell me some
          Jesus where my wisdom
          
          They don't see the tears on my face
          I feel like a clown, know this smile is fake
          When can I be real f**k that 
          Even now I'm thinking about 
          new song’s concept
          
          Maybe it could be the simple problem
          Maybe I'm not a man type of strong
          Bit**es blame my fence get off my zone
          Bit**es pretend not to have fence oh lord
          
          They act like a man
          who have no prejudice
          Satan call themselves ＂I’m the angel＂
          They talk behind me cuz always say
          ‘bout what make them feel upset 
          
          Somewhere over that window 
          Maybe that’s the land 
          what I'm looking for
          Here’s no any f**king body I can mingle
          I feel like a man stuck in that window 
          
          ＂blah blah＂
          
          Distance to the suicide
          It’s closer than I thought ooh
          6 feet to the window
          
          Whisper from my head inside
          It always gives me choice ooh
          It push me to the window
          
          Distance to the suicide
          Whisper from my head inside
          Wisdom please tell me some
          Jesus where my wisdom
          
          I was on the block if someone shot me
          It would be a suicide 
          Cuz I wouldn’t do nothing
          Suicide covered by shots
          
          I just wanna hide my plan for 
          suicide from my god
          But he will find out
          I Imagine every f**king night
          
          My girlfriend getting tired of 
          my pity f**king party
          It’s hard to call you my god
          It always hotline bling 
          New THUNDER’s in my head
          I emit it it’s not a hobby
          I just wanted to write about cool shit 
          like a Playboi Carti
          
          Lotta people dream
          about land over the window
          Your followers talking bullsh*t 
          they might follow different
          I don't wanna be one of ‘em 
          they all fake angel
          I hope u think me differently 
          with those fake angels
          
          Distance to the suicide
          It’s closer than I thought ooh
          6 feet to the window
          
          Whisper from my head inside
          It always gives me choice ooh
          It push me to the window
          
          Distance to the suicide
          Whisper from my head inside
          Wisdom please tell me some
          Jesus where my wisdom`,
          mvUri: "",
        },
        {
          trackNo: 7,
          title: "CAN'T STOP THIS THUNDER",
          lyrics: `THUNDER’s inside
          THUNDER’s outside
          Deeply inside there blue
          
          THUNDER’s inside
          THUNDER’s outside
          What am I supposed to do
          
          Bad idea comes 
          It hardly choked
          Oh please my lord
          Stop that noise
          
          I'm a paranoid
          It turns me cold
          
          I wanted to talk about Christian Dior
          But you tryna make me 
          so f**king serious
          Now I wanna get outta this atmosphere
          I didn't feel nothing why it feels so weird
          
          Who’s the guy behind the thunderstorm
          I can hear your sound 
          it was not my choice
          Every single night 
          I always talk with ghost
          I keep write down like ＂Girl Interrupted＂
          
          Can’t stop this THUNDER
          You make me feel surrender
          I can’t feel freedom
          Am I blaming you? I guess it’s fun
          
          Turn off that light for me
          Leave me to feel grief 
          I’m sick of being chosen one
          But I can't stop this THUNDER
          
          Turn off that light for me
          Leave me to feel grief 
          I’m sick of being chosen one
          But I can't stop this THUNDER
          
          THUNDER’s inside
          THUNDER’s outside
          Deeply inside
          There blue
          
          THUNDER’s inside
          THUNDER’s outside
          What am I supposed to do
          
          Forgot what was my motivation 
          I don't deserve to go inside your church
          God you are so awful look at that Sean
          (He is good, everything alright)
          
          Don’t wanna talk about way too serious
          But lightning on my head 
          makes me furious
          Already felt this, no choice
          Need to carry on
          
          Don't think this like other kids 
          Who pretending lonely
          Like other sad song 
          F**k those bit**es
          Who act like fake tough
          
          I'm the realest 
          This elevator 
          Here’s empty
          Heading to THUNDER 
          
          Can’t stop this THUNDER
          You make me feel surrender
          I can’t feel freedom
          Am I blaming you? I guess it’s fun
          
          Turn off that light for me
          Leave me to feel grief 
          I’m sick of being chosen one
          But I can't stop this THUNDER
          
          Turn off that light for me
          Leave me to feel grief 
          I’m sick of being chosen one
          But I can't stop this THUNDER
          
          I'm so confused about blessing 
          what you gave me 
          I can't tell it’s a benefit 
          it’s too f**king strict uh
          I'm not sure about this testing 
          My weakness shining like a Versace 
          You make me god damn creep
          
          My chalice filled with grief 
          they can't see what’s in this
          They think it filled with greed 
          they make me f**king freak
          I don't know maybe they right
          sh*t I can’t deny`,
          mvUri: "https://www.youtube.com/watch?v=y8B_pycKLQ8",
        },
        {
          trackNo: 8,
          title: "UNICORN (Feat. Wunderkid)",
          lyrics: `They say it like a unicorn
          Denying what I'm looking for
          Guess what it’s disney plot
          I believe it’s heroine’s life
          Who believe that fantasy land
          
          They say you like a unicorn 
          Denying what I’m praying for 
          Guess what it’s Dreamworks plot
          I believe it’s heroine’s plot
          Who believe that fantasy man 
          
          Smoke weed with my Jesus on the couch 
          He said “It’s a kinda god gift 
          I’ll call this marijuana” 
          Here’s my plan Imma make those girls 
          dance on your bed 
          Did I blaspheme? they never understand 
          my metaphors, wait 
          
          Sweet Jesus my man look at those snakes
          They keep smack their lips 
          My smell like beef
          My smell like cheese
          They feel my grief
          
          My greed too high can't see your sign
          Apologize I might be blind
          Don’t treat me just one of your clients
          Your David runnin on mountain 
          
          The enemies it’s bout thousand 
          F**k I wasn't but now I be coward
          I need it more powerful like typhoon
          No pure diamond forgot my childhood 
          
          On Santa Claus’ list, may be not there
          Can’t remember from 
          when I don't pray for god’s bless
          We were best friend 
          but now look at our plan 
          There’s a big crack my wishlist 
          all changed
          
          I be the same with those men 
          who deny my new plan
          I'm used to bad comments now 
          sweet like a candy cane
          
          They say it like a unicorn
          Denying what I'm looking for
          Guess what it’s disney plot
          I believe it’s heroine’s life
          Who believe that fantasy land
          
          They say you like a unicorn 
          Denying what I’m praying for 
          Guess what it’s Dreamworks plot
          I believe it’s heroine’s plot
          Who believe that fantasy man 
          
          I can't deny it, I got memory about this
          My small booth is tinted 
          umm it’s all private
          Makes me stylish 
          they can’t understand this
          My goosebumps never lie 
          it proves it wasn’t fantasy
          
          How long o lord , 
          don't make me embarrass
          I  just got blackmail from Herod
          Come on, need to shut 
          those Pharisee’s mouths
          Too loud hunt those parrots
          The way is narrow which I'm walking on 
          Feel like a Jack Sparrow 
          on legendary Black Pearl 
          
          They call me psycho they’re afraid of 
          what I’m looking for
          Everybody may know 
          how this kinda story’s ending goes
          Mr.Ghost please 
          just let my arrogance slide this time
          You know my type 
          I’m a cocky don't make your pilot dive 
          
          They say it like a unicorn
          Denying what I'm looking for
          Guess what it’s disney plot
          I believe it’s heroine’s life
          Who believe that fantasy land
          
          They say you like a unicorn 
          Denying what I’m praying for 
          Guess what it’s Dreamworks plot
          I believe it’s heroine’s plot
          Who believe that fantasy man 
          
          I still be knocking at your door
          Leaving all the lies they say about you
          Imma keep my trust and never let it go
          Your love I do it for`,
          mvUri: "",
        },
        {
          trackNo: 9,
          title: "LONELY DIVER",
          lyrics: `Standing on cliff Mr.Lonely diver
          I’m waiting your sign I'm ready to jump off
          Why even this moment feel
          so lonely and sorrow
          I'm looking for some reason why 
          I stop to dive 
          
          Standing on cliff Mr.Lonely diver
          Im waiting your sign I'm ready to jump off
          Nobody could relate to my mind
          Or everybody could relate to my mind
          
          Imma dive 
          Feel alive
          In the perfect night
          Yeah this perfect night
          
          Can’t wake up from this vibe
          Feel like I might can fly
          No lean no molly, cocaine
          I can’t stop this f**king light 
          
          I'm surfing starry night
          Under my feet it’s too dark
          Yesterday it was blue lake
          But now it looks like a dark space
          
          Im on the diving spot
          But why I'm still so lonely 
          Everything look so small
          Why did they look so huge for me 
          
          F**k off I gotta dive
          It’s different with suicide 
          Oh I’m f**kin lonely little diver 
          
          Standing on cliff Mr.Lonely diver
          I’m waiting your sign I'm ready to jump off
          Why even this moment feel 
          so lonely and sorrow
          I'm looking for some reason why 
          I stop to dive 
          
          Standing on cliff Mr.Lonely diver
          Im waiting your sign I'm ready to jump off
          Nobody could relate to my mind
          Or everybody could relate to my mind
          
          Imma dive 
          Feel alive
          In the perfect night
          Yeah this perfect night
          
          Smoke with orange light
          Im baking whole f**king sound
          Feel like Kanye west for now
          All lyrics are improvised
          
          I'm sick and tired of this town
          Here’s no any god im finding
          Fake advertisement for 
          fake blue and suicide
          
          Im on the diving spot
          But why I'm still so lonely 
          Everything look so small
          Why did they look so huge for me 
          
          F**k off I gotta dive
          It’s different with suicide 
          Oh I’m f**kin lonely little diver 
          
          Standing on cliff Mr.Lonely diver
          I’m waiting your sign 
          I'm ready to jump off
          Why even this moment 
          feel so lonely and sorrow
          I'm looking for some reason why 
          I stop to dive 
          
          Standing on cliff Mr.Lonely diver
          Im waiting your sign 
          I'm ready to jump off
          Nobody could relate to my mind
          Or everybody could relate to my mind
          
          Imma dive 
          Feel alive
          In the perfect night
          Yeah this perfect night
          
          Going thru drive thru
          I'm on my a way uh huh
          Just picked your burgers
          You don't need to come
          
          I just climb down mountain
          There’s nothing in my fountain
          Same night but it’s different
          Same night but it’s deeper`,
          mvUri: "https://www.youtube.com/watch?v=4K8oGplWiUI",
        },
        {
          trackNo: 10,
          title: "LAND",
          lyrics: `I don't know why I'm still here Jesus
          I can't feel any love
          I don't know why they mention nicely
          They ain't know nothing you know
          
          Imma fly like a pilot
          I’m tired of this land
          Imma die in another new planet
          
          Imma go find some place
          Where I could be honest
          I wanna take mask off
          Real love always have mercy
          I wanna stop massacre
          
          Want to know
          Now what u thinking
          About this world you made
          
          I don't know why I still live Jesus
          I can't feel any love
          I don't know why they mentioned nicely
          they can't relate with my hurts
          
          Imma fly like a pilot
          I’m tired of this land
          Imma die in another new planet
          
          Imma go find some place
          Where I could be honest
          I wanna take mask off
          Real love always have mercy
          I wanna stop massacre
          
          Want to know
          Now what u thinking
          About your old world
          
          (ENDING CREDIT)`,
          mvUri: "",
        },
      ],
    },
  ],
  album: {},
  track: {},
}

// reducer
const reducer = handleActions(
  {
    [SET_ALBUMS]: (state, action) => ({
      ...state,
      albums: action.payload,
    }),
    [SET_ALBUM]: (state, action) => ({
      ...state,
      album: state.albums.filter((i) => i.albumSeq === Number(action.payload))[0],
    }),
    [SET_TRACK]: (state, action) => ({
      ...state,
      track: state.album.track.filter((i) => i.trackNo === Number(action.payload))[0],
    }),
  },
  initState
)

export default reducer
