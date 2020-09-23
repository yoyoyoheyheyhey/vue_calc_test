new Vue({
  el: "#app",
  data: {
    subjects: {
      national_language: { score: 0, ja: "国語" },
      english:  { score: 0, ja: "英語" },
      mathematics: { score: 0, ja: "数学" },
      science: { score: 0, ja: "理科" },
      society: { score: 0, ja: "社会" },
    },
    resultShowCase: {
      rank: false,
      judgement: false,
      final: false,
    },
  },
  methods: {
    display(key) {
      this.resultShowCase[key] = !this.resultShowCase[key];
    },
  },
  computed: {
    sum() {
      return Object
        .keys(this.subjects)
        .map((key) => this.subjects[key]['score'])
        .reduce((prev, next) => +prev + +next)
    },
    average() {
      return this.sum / Object.keys(this.subjects).length;
    },
    rank() {
      const avg = this.average;
      if (avg >= 80) {
        return 'A';
      } else if (avg >= 60) {
        return 'B';
      } else if (avg >= 40) {
        return 'C';
      } else {
        return 'D';
      }
    },
    judgement() {
      const isFailed = Object
        .keys(this.subjects)
        .some((key) => {
          return this.subjects[key]['score'] < 60;
        });
      return isFailed ? "不合格" : "合格";
    },
    final() {
      return `<label id="alert-indicate" class="alert alert-info">あなたの成績は${this.rank}です。${this.judgement}です</label>`
    }
  }
})
