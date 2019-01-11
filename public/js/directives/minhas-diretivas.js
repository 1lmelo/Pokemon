angular.module('docsSimpleDirective', [])
.directive('myCustomer', function() {
  return {
    template: '<divid="paginator"><span>1</span><span>2</span></div>'
  };
});