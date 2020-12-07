Vue.component('students', {
  template: '<h4>Student registration</h4>'
})
var app = new Vue({
  el: '#app',
  data: {
    name: 'tsolo',
    course: 'Diverweb',
    period: '2025-12-22',
    students:[
      {
        id: 1,
        name: 'Jules',
        course: 'Diver',
        period: '2029-11-18'
      },
      {
        id: 2,
        name: 'Luci',
        course: 'Java',
        period: '2030-6-15'
      },
      {
        id: 3,
        name: 'Jules2',
        course: 'C',
        period: '2040-10-10'
      }
    ]
  },
  methods: {
        addStudent: function() {
            let element = this.students[this.students.length - 1];
            let auto = element.id + 1;
            return this.students.push({ id: auto, name: this.name, course: this.course, period: this.period })
        }
    }
})
