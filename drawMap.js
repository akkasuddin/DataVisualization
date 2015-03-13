// var Districts = new Array();
// Districts["Bandarban"] = 2;
// Districts["Barguna"] = 2;
// Districts["Barisal"] = 7;
// Districts["Bhola"] = 4;
// Districts["Bogra"] = 28;
// Districts["Brahmanbaria"] = 4;
// Districts["Chandpur"] = 2;
// Districts["Chapainawabganj"] = 10;
// Districts["Chittagong"] = 77;
// Districts["Chuadanga"] = 27;
// Districts["Comilla"] = 7;
// Districts["Cox's Bazar"] = 1;
// Districts["Dhaka"] = 336;
// Districts["Dinajpur"] = 21;
// Districts["Faridpur"] = 3;
// Districts["Gaibandha"] = 4;
// Districts["Gazipur"] = 5;
// Districts["Habiganj"] = 3;
// Districts["Jamalpur"] = 8;
// Districts["Jaypurhat"] = 1;
// Districts["Jessore"] = 43;
// Districts["Jhalokathi"] = 5;
// Districts["Jhenidah"] = 9;
// Districts["Joypurhat"] = 2;
// Districts["Kalaroa"] = 1;
// Districts["Kamrangirchar"] = 1;
// Districts["Khagrachhari"] = 8;
// Districts["Khulna"] = 1;
// Districts["Kishoreganj"] = 3;
// Districts["Kurigram"] = 3;
// Districts["Kushtia"] = 22;
// Districts["Lalmonirhat"] = 13;
// Districts["Madaripur"] = 1;
// Districts["Magura"] = 11;
// Districts["Manikganj"] = 7;
// Districts["Meherpur"] = 8;
// Districts["Moulvibazar"] = 12;
// Districts["Munshiganj"] = 1;
// Districts["Mymensingh"] = 5;
// Districts["Naogaon"] = 2;
// Districts["Narail"] = 3;
// Districts["Narayanganj"] = 6;
// Districts["Narsingdi"] = 4;
// Districts["Naryanganj"] = 1;
// Districts["Natore"] = 4;
// Districts["Netrokona"] = 6;
// Districts["Nilphamari"] = 6;
// Districts["Pabna"] = 18;
// Districts["Panchagarh"] = 7;
// Districts["Patuakhali"] = 4;
// Districts["Pirojpur"] = 6;
// Districts["Rajshahi"] = 6;
// Districts["Rajshahsi"] = 1;
// Districts["Rangamati"] = 1;
// Districts["Rangpur"] = 20;
// Districts["Shatkhira"] = 89;
// Districts["Shariatpur"] = 1;
// Districts["Sherpur"] = 1;
// Districts["Sirajganj"] = 7;
// Districts["Sunamganj"] = 6;
// Districts["Sylhet"] = 20;
// Districts["Tangail"] = 10;
// Districts["Thakurgaon"] = 42;

var width = 500,
    height = 700;
var scal = 5000;
var projection = d3.geo.mercator()
    .scale(scal)
    .translate([-76.5/50.0 * scal, scal/2-scal/55]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(".viewer")
	.append("svg")
    .attr("width", width)
    .attr("height", height);
	

d3.json("./bd1.json", function(error, bd) {
  svg.selectAll(".subunit")
      .data(topojson.feature(bd, bd.objects.subunits).features)
    .enter().append("path")
      .attr("class", function(d) { return "subunit " + d.id; })
      .attr("d", path);
	  
  svg.selectAll(".subunit")
		.style('fill',function(d){
			amount = Districts[d.id];
			if(amount == 0 || amount== undefined)
				return 'rgba(0,200,0,0.5)';
			
			return 'rgba(255,0,0,'+amount*1.0/89.0+')';
		});

});

