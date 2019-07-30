// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    high_score_Audio: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // use this for initialization

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
    }

    onCollisionEnter(other, self) {
        this.scheduleOnce(function () {
            //cc.audioEngine.play(this.high_score_Audio, false, Global.volume);
        }, 2);
        cc.director.loadScene('LevelMenu');
        //Global.level2Open = true;
    }

    start() {

    }

    // update (dt) {}
}
