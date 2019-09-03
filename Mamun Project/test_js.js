<script>
			$(document).ready(function(){
				var vehicleNo = $('#vehicleNo').val();
				var income = $('#income').val();
				var remark = $('#remark').val();
				var expendature = $('#expendature').val();
				$(".submit-data").click(function(){
					$('.detail-section .dtl-input-section-vno, .detail-section .dtl-input-section-income, .detail-section .dtl-input-section-remark, .detail-section .dtl-input-section-expendature').append('<input  style="margin-bottom:4%;" type="text"/>');
					var vno = $('.detail-section .dtl-input-section-vno input');
					$(vno).addClass($('#vehicleNo').val() + '-vno');
					$(vno).val($('#vehicleNo').val());
					$('#vehicleNo').val('');
					
					var income = $('.detail-section .dtl-input-section-income input');
					$(income).addClass($('#vehicleNo').val() + '-income');
					$(income).val($('#income').val());
					$('#income').val('');
					
					var remark = $('.detail-section .dtl-input-section-remark input');
					$(remark).addClass($('#vehicleNo').val() + '-remark');
					$(remark).val($('#remark').val());
					$('#remark').val('');
					
					var expendature = $('.detail-section .dtl-input-section-expendature input');
					$(expendature).addClass($('#vehicleNo').val() + '-expendature');
					$(expendature).val($('#expendature').val());
					$('#expendature').val('');
					
					
					//$('#vehicleNo1').val($('#vehicleNo').val());
					//$('#vehicleNo').val('');
					//alert($('#vehicleNo').val());
					console.log($('.count').val());
				});
			});