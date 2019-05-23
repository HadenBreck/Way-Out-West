$(document).ready(function() {
              $('.wrap').ready(function() {
                var destination = this.href;
                $('body').fadeOut(11000,"swing", function() {
                    window.location = 'calls.html';
                  });
                });
                return false;
              });