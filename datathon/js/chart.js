var options = {
	animationEasing : "easeOutQuart",
    tooltipTemplate: " <%=label%>: <%= numeral(value/100).format('%') %>" 
}

var topData = [
    {
        value: 70,
        color: "#001A57",
        highlight: "#0990C3",
        label: "Related Field"
    },
    {
        value: 30,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Unrelated Field"
    }
]

var ctx = document.getElementById("topChart").getContext("2d");
var topChart = new Chart(ctx).Doughnut(topData, options);

var minorityData = [
    {
        value: 46,
        color: "#001A57",
        highlight: "#0990C3",
        label: "Underrepresented"
    },
    {
        value: 54,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Non-Minority"
    }
]

var ctx = document.getElementById("minorityChart").getContext("2d");
var minorityChart = new Chart(ctx).Doughnut(minorityData, options);

var satisfactionData = [
    {
        value: 88,
        color: "#001A57",
        highlight: "#0990C3",
        label: "Satisfied"
    },
    {
        value: 12,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Not Satisfied"
    }
]

var ctx = document.getElementById("satisfactionChart").getContext("2d");
var satisfactionChart = new Chart(ctx).Doughnut(satisfactionData, options);