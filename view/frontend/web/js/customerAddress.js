require([
    'jquery',
    'jquery/ui',
], function($){ 
    $(document).ready( function() {
        // Função ativada ao tirar o foco do input de CEP
        $(document).on("focusout",'input[name="postcode"]', function() {

            var cep = document.getElementsByName("postcode")[0].value;
            $.getJSON("https://brasilapi.com.br/api/cep/v1/"+ cep, function(data) {
            
            // Substiruir variaveis conforme a API customizada indique
            var rua = data.street;
            var bairro = data.neighborhood;
            var cidade = data.city;
            var uf = data.state;

            
            if(data.street != undefined){
                var street1 = jQuery("#street_1");
                street1.val(rua).trigger('keyup');
            }
            if(data.neighborhood != undefined){
                var street4 = jQuery("#street_4");
                street4.val(bairro).trigger('keyup');
            }
            var city = jQuery("#city");
            city.val(cidade).trigger('keyup');

            var state_form = jQuery("#region_id");
            switch(uf){
                case "AC":
                        state_form.val(485).trigger('change');
                        break;
                    case "AL":
                        state_form.val(486).trigger('change');
                        break;
                    case "AP":
                        state_form.val(487).trigger('change');
                        break;
                    case "AM":
                        state_form.val(488).trigger('change');
                        break;
                    case "BA":
                        state_form.val(489).trigger('change');
                        break;
                    case "CE":
                        state_form.val(490).trigger('change');
                        break;
                    case "DF":
                        state_form.val(511).trigger('change');
                        break;
                    case "ES":
                        state_form.val(491).trigger('change');
                        break;
                    case "GO":
                        state_form.val(492).trigger('change');
                        break;
                    case "MA":
                        state_form.val(493).trigger('change');
                        break;
                    case "MT":
                        state_form.val(494).trigger('change');
                        break;
                    case "MS":
                        state_form.val(495).trigger('change');
                        break;
                    case "MG":
                        state_form.val(496).trigger('change');
                        break;
                    case "PA":
                        state_form.val(497).trigger('change');
                        break;
                    case "PB":
                        state_form.val(498).trigger('change');
                        break;
                    case "PR":
                        state_form.val(499).trigger('change');
                        break;
                    case "PE":
                        state_form.val(500).trigger('change');
                        break;
                    case "PI":
                        state_form.val(501).trigger('change');
                        break;
                    case "RJ":
                        state_form.val(502).trigger('change');
                        break;
                    case "RN":
                        state_form.val(503).trigger('change');
                        break;
                    case "RS":
                        state_form.val(504).trigger('change');
                        break;
                    case "RO":
                        state_form.val(505).trigger('change');
                        break;
                    case "RR":
                        state_form.val(506).trigger('change');
                        break;
                    case "SC":
                        state_form.val(507).trigger('change');
                        break;
                    case "SP":
                        state_form.val(508).trigger('change');
                        break;
                    case "SE":
                        state_form.val(509).trigger('change');
                        break;
                    case "TO":
                        state_form.val(510).trigger('change');
                        break;
                    default:
                        document.getElementsByName('region_id')[0].getElementsByTagName('option')[0].selected = 'selected';
                        break;                                                               
                }
            }).fail(function() {
                jQuery("#street_1").val("");
                jQuery("#street_2").val("");
                jQuery("#street_3").val("");
                jQuery("#street_4").val("");
                jQuery("#city").val("");
            });
        });
    });            
});