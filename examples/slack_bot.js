/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


This is a sample Slack bot built with Botkit.

This bot demonstrates many of the core features of Botkit:

* Connect to Slack using the real time API
* Receive messages based on "spoken" patterns
* Reply to messages
* Use the conversation system to ask questions
* Use the built in storage system to store and retrieve information
  for a user.

# RUN THE BOT:

  Get a Bot token from Slack:

    -> http://my.slack.com/services/new/bot

  Run your bot from the command line:

    token=<MY TOKEN> node slack_bot.js

# USE THE BOT:

  Find your bot inside Slack to send it a direct message.

  Say: "Hello"

  The bot will reply "Hello!"

  Say: "who are you?"

  The bot will tell you its name, where it is running, and for how long.

  Say: "Call me <nickname>"

  Tell the bot your nickname. Now you are friends.

  Say: "who am I?"

  The bot will tell you your nickname, if it knows one for you.

  Say: "shutdown"

  The bot will ask if you are sure, and then shut itself down.

  Make sure to invite your bot into other channels using /invite @<my bot>!

# EXTEND THE BOT:

  Botkit has many features for building cool and useful bots!

  Read all about it here:

    -> http://howdy.ai/botkit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('../lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears(['みかちゃんは何者？'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, '美少女だよ')
});

controller.hears(['本当のみかちゃんは？'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, '28歳無職のアニオタだよ……')
})

controller.hears(['メッセージベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, '発展性に乏しいハンドを持っているときに、相手のドローハンドのオッズを削るために打たれるベット。打たないことが不利益になる場合に、消極的に打つことが多い性格のベットで、ほとんどの場合はフラットな立場で打つ。')
});

controller.hears(['プロテクションベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'トップヒットしたことなど、正しいストーリーを相手に伝えるためのベット。ただし相手に勝っている自信のもとに打たれるとは限らない。例えばフロップで高めのミドルヒットをした場合や、低めのトップヒットをした場合など、ヒットしたことを空いてに伝えるため')
});

controller.hears(['インシステントベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, '突然ウェットなボードになったときなどに、嘘のストーリーを相手に信じさせるためのベット。いわゆるブラフベットであることが多いが、必ずしも嘘のヒットを主張するわけではなく、嘘のスリックを主張することも多い。強いヒットをしたのにわざと少額のベットをすることで、「滑ったから安いブラフをしている」と信じさせてバリューを引き出すようなインシステントベットもある。')
});

controller.hears(['ブロックベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'ベットはしたいがレイズはできないというような相手に対して、先んじて少額のベットすることなどで、相手のアクションを制限してポットサイズを小さく保つためのベット。')
});

controller.hears(['アグレッションベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'ポジションがあるフロップにおいて、ターンチェックバックから、リバーでフリードローする狙いで打たれるフロップCBなど、アグレッションを獲得または保持することで、アグレッションによる優位性を活かすためのベット。')
});

controller.hears(['リスクベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'モノトーンフロップのオーバーベットや、ボードストレート時のビッグベットなど、ブラフだと見破られたとしてもリスクの大きさを根拠にフォールドを迫るためのベット。極端に大きなベットでなくても、早いストリートにおけるブラフベットは、たいてい十分なストーリーを補完できないので、インシステントベットというよりリスクベットの性格が強くなる。')
});

controller.hears(['アイソレートベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'フロップマルチウェイにおけるポットサイズCBなど、主に参加者を減らす目的で打たれるベット。多くは漫然と人数を減らすために打たれるが、2オーバーを降ろしてトップヒットだけを残すことで、ポストフロップにおけるオーバーカードを、相手にとって確実にスケアとする目的などでも打たれる。')
});

controller.hears(['プッシュベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'ポットを膨らませるためのベット。大きなポットにリークがあるプレイヤーを狩ったり、レンジvsレンジなど難しいヘッズアップで、ポストフロップは有利にプレイできるという自信に基づき、強弱の曖昧なフロップ時点からポットを膨らませておくようなベット。')
});

controller.hears(['セッティングベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'ライト3ベッターに対してタイトにオープンするなど、特定の状況をセッティングするためのベット。おかしな額のベットを標準サイズに直して、事故の起こりやすい特殊な状況を避けるためにもおこなわれる。')
});

controller.hears(['スチールベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'オーバーフォールドする相手に対しておこなわれるような、スチールを狙うベット。オーバーフォールドする相手でなくとも、ポジションやアグレッションなどの理由から、フォールドせざるをえない相手に対してもおこなわれる。ストーリーがなくても、額が大きくなくても、相手のフォールドが期待できるという特徴がある。')
});

controller.hears(['ドミネイトベット'], 'direct_message,direct_mention,mention', function (bot, message) {
    bot.reply(message, 'ナッツあるいはドミネイトハンドを持っているときに、アンダードッグにコールさせるためのベット。もっとも基本的なベットだが、ナッツあるいはドミネイト判断が難しいため、案外純粋なバリューベットが打てる機会は少ない。');
});

controller.hears(['今日は(.*)勝った'], ['ambient', 'direct_mention'], (bot, message) => {
    // bot.reply(message, 'すごいにゃ！！！きっと明日も勝てるはずにゃ！！');

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'two_hearts'
    }, (err, res) => {
        var money = message.match[1];
        bot.reply(message, money + 'も勝つなんてすごいにゃ！明日も勝てると良いにゃ〜:heart_eyes_cat:');
    });
});

controller.hears(['今日は(.*)負けた'], ['ambient', 'direct_mention'], (bot, message) => {
    // bot.reply(message, 'すごいにゃ！！！きっと明日も勝てるはずにゃ！！');

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'scream'
    }, (err, res) => {
        var money = message.match[1];
        bot.reply(message, 'そんな日もあるにゃ。明日はきっと良い日になるにゃ:joy_cat:');
    });
});

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function (bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function (err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });


    controller.storage.users.get(message.user, function (err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});

controller.hears(['call me (.*)', 'my name is (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {
    var name = message.match[1];
    controller.storage.users.get(message.user, function (err, user) {
        if (!user) {
            user = {
                id: message.user,
            };
        }
        user.name = name;
        controller.storage.users.save(user, function (err, id) {
            bot.reply(message, 'Got it. I will call you ' + user.name + ' from now on.');
        });
    });
});

controller.hears(['what is my name', 'who am i'], 'direct_message,direct_mention,mention', function (bot, message) {

    controller.storage.users.get(message.user, function (err, user) {
        if (user && user.name) {
            bot.reply(message, 'Your name is ' + user.name);
        } else {
            bot.startConversation(message, function (err, convo) {
                if (!err) {
                    convo.say('I do not know your name yet!');
                    convo.ask('What should I call you?', function (response, convo) {
                        convo.ask('You want me to call you `' + response.text + '`?', [{
                                pattern: 'yes',
                                callback: function (response, convo) {
                                    // since no further messages are queued after this,
                                    // the conversation will end naturally with status == 'completed'
                                    convo.next();
                                }
                            },
                            {
                                pattern: 'no',
                                callback: function (response, convo) {
                                    // stop the conversation. this will cause it to end with status == 'stopped'
                                    convo.stop();
                                }
                            },
                            {
                                default: true,
                                callback: function (response, convo) {
                                    convo.repeat();
                                    convo.next();
                                }
                            }
                        ]);

                        convo.next();

                    }, {
                        'key': 'nickname'
                    }); // store the results in a field called nickname

                    convo.on('end', function (convo) {
                        if (convo.status == 'completed') {
                            bot.reply(message, 'OK! I will update my dossier...');

                            controller.storage.users.get(message.user, function (err, user) {
                                if (!user) {
                                    user = {
                                        id: message.user,
                                    };
                                }
                                user.name = convo.extractResponse('nickname');
                                controller.storage.users.save(user, function (err, id) {
                                    bot.reply(message, 'Got it. I will call you ' + user.name + ' from now on.');
                                });
                            });



                        } else {
                            // this happens if the conversation ended prematurely for some reason
                            bot.reply(message, 'OK, nevermind!');
                        }
                    });
                }
            });
        }
    });
});


controller.hears(['shutdown'], 'direct_message,direct_mention,mention', function (bot, message) {

    bot.startConversation(message, function (err, convo) {

        convo.ask('Are you sure you want me to shutdown?', [{
                pattern: bot.utterances.yes,
                callback: function (response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function () {
                        process.exit();
                    }, 3000);
                }
            },
            {
                pattern: bot.utterances.no,
                default: true,
                callback: function (response, convo) {
                    convo.say('*Phew!*');
                    convo.next();
                }
            }
        ]);
    });
});


controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'],
    'direct_message,direct_mention,mention',
    function (bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':robot_face: I am a bot named <@' + bot.identity.name +
            '>. I have been running for ' + uptime + ' on ' + hostname + '.');

    });

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
