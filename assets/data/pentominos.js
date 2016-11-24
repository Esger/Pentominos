$scope.pentominos = [
    {
        "name" : "b",
        "type" : 0,
        "color" : "darkblue",
        "face" : 4,
        "faces" : [
            [[0,0],[1,0],[2,0],[0,1],[1,1]],
            [[0,0],[1,0],[0,1],[1,1],[1,2]],
            [[1,0],[2,0],[0,1],[1,1],[2,1]],
            [[0,0],[0,1],[1,1],[0,2],[1,2]],
            [[0,0],[1,0],[2,0],[1,1],[2,1]],
            [[1,0],[0,1],[1,1],[0,2],[1,2]],
            [[0,0],[1,0],[0,1],[1,1],[2,1]],
            [[0,0],[1,0],[0,1],[1,1],[0,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 0,
            "y" : 4
        }
    },{
        "name" : "c",
        "type" : 1,
        "color" : "darkviolet",
        "face" : 0,
        "faces" : [
            [[0,0],[1,0],[2,0],[0,1],[2,1]],
            [[0,0],[1,0],[1,1],[0,2],[1,2]],
            [[0,0],[2,0],[0,1],[1,1],[2,1]],
            [[0,0],[1,0],[0,1],[0,2],[1,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 6,
            "y" : 1
        }
    },{
        "name" : "f",
        "type" : 0,
        "color" : "orange",
        "face" : 5,
        "faces" : [
            [[1,0],[2,0],[0,1],[1,1],[1,2]],
            [[1,0],[0,1],[1,1],[2,1],[2,2]],
            [[1,0],[1,1],[2,1],[0,2],[1,2]],
            [[0,0],[0,1],[1,1],[2,1],[1,2]],
            [[0,0],[1,0],[1,1],[2,1],[1,2]],
            [[2,0],[0,1],[1,1],[2,1],[1,2]],
            [[1,0],[0,1],[1,1],[1,2],[2,2]],
            [[1,0],[0,1],[1,1],[2,1],[0,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 3,
            "y" : 4
        }
    },{
        "name" : "i",
        "type" : 4,
        "color" : "maroon",
        "face" : 0,
        "faces" : [
            [[0,0],[1,0],[2,0],[3,0],[4,0]],
            [[0,0],[0,1],[0,2],[0,3],[0,4]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 3,
            "y" : 0
        }
    },{
        "name" : "l",
        "type" : 0,
        "color" : "green",
        "face" : 5,
        "faces" : [
            [[0,0],[1,0],[2,0],[3,0],[0,1]],
            [[0,0],[1,0],[1,1],[1,2],[1,3]],
            [[3,0],[0,1],[1,1],[2,1],[3,1]],
            [[0,0],[0,1],[0,2],[0,3],[1,3]],
            [[0,0],[1,0],[2,0],[3,0],[3,1]],
            [[0,3],[1,0],[1,1],[1,2],[1,3]],
            [[0,0],[0,1],[1,1],[2,1],[3,1]],
            [[0,0],[1,0],[0,1],[0,2],[0,3]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 6,
            "y" : 4
        }
    },{
        "name" : "n",
        "type" : 0,
        "color" : "magenta",
        "face" : 1,
        "faces" : [
            [[0,0],[1,0],[2,0],[2,1],[3,1]],
            [[1,0],[1,1],[1,2],[0,2],[0,3]],
            [[0,0],[1,0],[1,1],[2,1],[3,1]],
            [[1,0],[1,1],[0,1],[0,2],[0,3]],
            [[0,1],[1,1],[1,0],[2,0],[3,0]],
            [[0,0],[0,1],[1,1],[1,2],[1,3]],
            [[0,1],[1,1],[2,1],[2,0],[3,0]],
            [[0,0],[0,1],[0,2],[1,2],[1,3]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 5,
            "y" : 4
        }
    },{
        "name" : "t",
        "type" : 2,
        "color" : "lime",
        "face" : 3,
        "faces" : [
            [[0,0],[1,0],[2,0],[1,1],[1,2]],
            [[2,0],[0,1],[1,1],[2,1],[2,2]],
            [[0,2],[1,0],[2,2],[1,1],[1,2]],
            [[0,0],[0,1],[1,1],[2,1],[0,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 0,
            "y" : 5
        }
    },{
        "name" : "v",
        "type" : 1,
        "color" : "deepskyblue",
        "face" : 1,
        "faces" : [
            [[0,0],[0,1],[1,2],[1,2],[2,2]],
            [[0,2],[0,1],[0,0],[1,0],[2,0]],
            [[0,0],[1,0],[2,0],[2,1],[2,2]],
            [[0,2],[1,2],[2,2],[2,1],[2,0]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 0,
            "y" : 0
        }
    },{
        "name" : "w",
        "type" : 1,
        "color" : "teal",
        "face" : 1,
        "faces" : [
            [[0,0],[0,1],[1,1],[1,2],[2,2]],
            [[0,2],[0,1],[1,1],[1,0],[2,0]],
            [[0,0],[1,0],[1,1],[2,1],[2,2]],
            [[0,2],[1,2],[1,1],[2,1],[2,0]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 2,
            "y" : 1
        }
    },{
        "name" : "x",
        "type" : 5,
        "color" : "red",
        "face" : 0,
        "faces" : [
            [[1,0],[0,1],[1,1],[2,1],[1,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 4,
            "y" : 1
        }
    },{
        "name" : "y",
        "type" : 0,
        "color" : "gold",
        "face" : 5,
        "faces" : [
            [[0,0],[0,1],[1,1],[0,2],[0,3]],
            [[0,0],[1,0],[2,0],[3,0],[2,1]],
            [[0,2],[1,0],[1,1],[1,2],[1,3]],
            [[1,0],[0,1],[1,1],[2,1],[3,1]],
            [[0,1],[1,0],[1,1],[1,2],[1,3]],
            [[2,0],[0,1],[1,1],[2,1],[3,1]],
            [[0,0],[0,1],[0,2],[1,2],[0,3]],
            [[0,0],[1,0],[2,0],[3,0],[1,1]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 1,
            "y" : 6
        }
    },{
        "name" : "z",
        "type" : 3,
        "color" : "blue",
        "face" : 1,
        "faces" : [
            [[0,0],[0,1],[1,1],[2,1],[2,2]],
            [[0,2],[1,2],[1,1],[1,0],[2,0]],
            [[0,2],[0,1],[1,1],[2,1],[2,0]],
            [[0,0],[1,0],[1,1],[1,2],[2,2]]
        ],
        "parts" : 5,
        "position" : {
            "x" : 0,
            "y" : 1
        }
    },{
        "name" : "o",
        "type" : 5,
        "color" : "darkslategray",
        "face" : 0,
        "faces" : [
            [[0,0],[1,0],[0,1],[1,1]]
        ],
        "parts" : 4,
        "position" : {
            "x" : 3,
            "y" : 3
        }
    }
];
