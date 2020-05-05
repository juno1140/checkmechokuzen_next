import React, {Component} from 'react'

const QUESTIONS = [
    '成人の安静呼吸時における標準的な一回換気量と解剖学的死腔量の値(33-AM5)',
    '体温調節中枢の場所(40-AM2)',
    '日本の2017年の合計特殊出生率(40-AM12)',
    'Na<sup>+</sup>の濃度は細胞内外どちらが高いか(40-AM16)',
    '椎骨の中で、頚椎・胸椎・腰椎の骨の数はいくつか(39-AM1)',
    '健康成人の動脈血血液ガス値でHCO<sub>3</sub><sup>-</sup>の正常値(38-AM5)',
    '赤血球の寿命と赤血球を壊す主な臓器(38-AM7)',
    '健康成人の１日の原尿の量[L]と原尿が尿細管で再吸収される割合[%](38-AM10)',
    '放射能の強さ・吸収線量・線量当量のそれぞれの単位(39-AM21)',
    'リチウムイオン電池は一次電池か二次電池か(40-AM24)',
    '理想オペアンプの入力インピーダンスと出力インピーダンスはそれぞれ0と無限大どちらか(40-AM33)',
    '論理回路の中で入力A,Bいずれかが1の場合のみ出力が1になる回路(40-AM35)',
    'ファイルを勝手に暗号化したり、システムを起動できなくしたりして復元するための身代金を要求するマルウェア(40-AM38)',
    '熱電対は温度を何に変換するセンサか(40-AM41)',
    '生体軟部組織中を伝搬する5MHzの超音波の波長はおよそ何mmか(38-AM43)',
    'MRIの静磁場強度[T](40-AM45)',
    '<sup>18</sup>FDG PET検査で、<sup>18</sup>FDGはある物質代謝の活発な細胞に特異的に集まる。ある物質とは何か(37-AM48)',
    '固有音響インピーダンスが大きいのは骨・肺のどちらか(37-AM55)',
    '血流のレイノルズ数が大きいのは上行大動脈・下大静脈のどちらか(37-AM56)',
    'エアレーションが必要な滅菌法(36-AM60)',
    '標準12誘導心電計でV<sub>2</sub>誘導の電極の貼り付け位置(39-PM2)',
    '血液ガス分析装置において、P<sub>O<sub>2</sub></sub>を測定する方法(電極)(39-PM5)',
    'IABPでバルーンを拡張させるために使うガス(39-PM6)',
    'オンラインHDFにおいて、補充液に用いるのは何か(37-PM7)',
    '熱希釈式心拍出量測定について、心臓のどこに何を一気に注入するか(39-PM25)',
    '吸着型酸素濃縮器で吸着剤として使用する材料と吸着させる物質(37-PM4)',
    '人工呼吸器の換気モードのIRVでは吸気と呼気どちらを長く設定するか(38-PM19)',
    '麻酔器で二酸化炭素吸着剤として使われているのは何か。又は使用後は何色に変化するか(38-PM9, 36-PM47)',
    '一般非常電源、特別非常電源、瞬時特別非常電源それぞれ何秒以内に立ち上がるか(39-PM57)',
    '医療ガス配管端末器で、酸素・笑気・空気・窒素・吸引・炭酸ガスそれぞれの色は何か(38-PM60)'
];
const ANSWERS = [
    '一回換気量：約500mL<br>解剖学的死腔量：約150mL',
    '視床下部',
    '<strong>1.43</strong><br>(2018年は1.42)<br>(2016-2018年)生まれた子供の数は3年連続で100万人を割った。<br>(厚労省より)',
    '細胞外',
    '頚椎：7個<br>胸椎：12個<br>腰椎：5個',
    '約22-26mEq/L',
    '寿命は約120日<br>破壊は主に脾臓と肝臓',
    '原尿は健康な方でおよそ150L/日<br>尿細管での再吸収は99%',
    '<strong>放射能の強さ：Bq(ベクレル)</strong><br>１秒間に原子核が崩壊する数<br><strong>吸収線量：Gy(グレイ)またはJ/kg</strong><br>放射線のエネルギーが物質に吸収される量<br><strong>線量当量：Sv(シーベルト)</strong><br>放射線の人体への影響',
    '<strong>リチウムイオン電池は二次電池</strong><br>二次電池：充電して繰り返し使える電池のこと<br>一次電池：使い切り電池のこと',
    '入力インピーダンス：無限大<br>出力インピーダンス：0',
    'XOR回路',
    'ランサムウェア',
    '電圧(起電力)',
    '<strong>およそ0.30mm</strong><br>生体軟部組織と水中の音速はほぼ同じで約1500m/s。生体軟部組織の音速を1500m/sとすると、<br>1500m/s ÷ 5MHz = 0.30mm',
    '一般的に1.5Tまたは3T<br>（7T MRIというのも存在します）',
    'グルコース',
    '骨(密度が大きいほど大きくなる)',
    '上行大動脈',
    'EOGガス滅菌',
    '第4肋間胸骨左縁',
    'ポーラログラフィ(ポーラログラフィ型電極)',
    'ヘリウム(応答性に優れるため)',
    '透析液',
    '右心房に生理食塩液(又はブドウ糖液)を急速注入する。',
    '吸着剤：ゼオライト(アルミノ珪酸塩)<br>吸着物質：窒素',
    '吸気',
    'ソーダライム(又はバラライム)<br><span style="color:#7644ff;">青紫色</span>に変化する。',
    '一般非常電源：40sec<br>特別非常電源：10sec<br>瞬時特別非常電源：0.5sec',
    '酸素：<span style="color:green;">緑</span><br>笑気：<span style="color:blue;">青</span><br>空気：<span style="color:#eec600;">黄</span><br>窒素：<span style="color:#c0c0c0;">灰</span><br>吸引：黒<br>炭酸ガス：<span style="color:#ff9900;">橙</span>',
];

class Questions extends Component {

    constructor(props){
        super(props);
        this.state = {
            showAnsFlg: Array.from({length: ANSWERS.length}, x => true), // 解説の非表示フラグを設定
        };
        this.showAnswer = this.showAnswer.bind(this);
    }

    // 「解説」ボタンクリック時の処理
    showAnswer(index){
        this.state.showAnsFlg[index] = !this.state.showAnsFlg[index];
        this.setState((state)=>{
            return ({
                showAnsFlg: state.showAnsFlg,
            });
        });
    }

    render() {
        return (
            <div  className="question">
                {
                    QUESTIONS.map(function(q, index) {
                        return <section key={index}>
                            <h4 dangerouslySetInnerHTML={{ __html: "【問題 " + (index + 1) + " 】" + q}}></h4>
                            <button onClick={()=> this.showAnswer(index)}>解答</button>
                            <div className="ans" hidden={this.state.showAnsFlg[index]} dangerouslySetInnerHTML={{ __html: ANSWERS[index]}}></div>
                        </section>
                    }, this)
                }
            </div>
        )
    }
}

export default Questions
