import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent implements OnInit {
  @Input() data: any;
  private options: any;

  constructor() {

  }

  ngOnInit() {
    let elf = $("#orgchart")
    this.initchart(elf, {'data': this.data, 'nodeContent': 'title'})
  }

  initchart(elf, opts) {
    const defaultOptions = {
      'nodeTitle': 'name',
      'nodeId': 'id',
      'toggleSiblingsResp': false,
      'visibleLevel': 999,
      'chartClass': '',
      'exportButton': false,
      'exportFilename': 'OrgChart',
      'exportFileextension': 'png',
      'parentNodeSymbol': 'fa-users',
      'draggable': false,
      'direction': 't2b',
      'pan': false,
      'zoom': false,
      'zoominLimit': 7,
      'zoomoutLimit': 0.5
    };
    let options = $.extend({}, defaultOptions, opts);
    this.options = options;
    let data = options.data;
    var $chart = $('<div>', {
      'data': {'options': options},
      'class': 'orgchart' + (options.chartClass !== '' ? ' ' + options.chartClass : '') + (options.direction !== 't2b' ? ' ' + options.direction : ''),
      'click': function (event) {
        if (!$(event.target).closest('.node').length) {
          $chart.find('.node.focused').removeClass('focused');
        }
      }
    });
    this.buildHierarchy($chart, data);
    elf.append($chart)
  }

  buildHierarchy(chart, data) {
    let numary = []
    for (let i of data) {
      numary.push(i.data.length)
    }
    const maxcol = this.smallestCommons(numary) * 2;
    let Maxdepth = data.length;
    // Construct the node
    let $nodeWrapper;
    $nodeWrapper = $('<table></table>');
    for (let i = 0; i < Maxdepth; i++) {
      let $tr = $('<tr></tr>')
      const currentData = data[i].data;
      if (i == Maxdepth - 1) {
        // 最后一层
        for (let i of currentData) {
          let $td = $('<td' + ' colspan="' + maxcol / currentData.length + '"' + '></td>');
          const $nodeDiv = this.createnode(i)
          $td.append($nodeDiv)
          $tr.append($td)
        }
        $nodeWrapper.append($tr)
      } else {
        let childrenData = data[i + 1].data;
        for (let i of currentData) {
          let $td = $('<td' + ' colspan="' + maxcol / currentData.length + '"' + '></td>');
          const $nodeDiv = this.createnode(i)
          $td.append($nodeDiv)
          $tr.append($td)
        }
        $nodeWrapper.append($tr)
        let upperLines = '<tr class="lines"><td colspan="' + maxcol / currentData.length + '"><div class="downLine"></div></td>';
        let lowerLines = '<tr class="lines"><td colspan="' + maxcol / childrenData.length / 2 + '"class="rightLine"></td>';
        for (let i = 1; i < currentData.length; i++) {
          upperLines += '<td colspan="' + maxcol / currentData.length + '"><div class="downLine"></div></td>';
        }
        upperLines += '</tr>'
        for (let i = 1; i < childrenData.length; i++) {
          lowerLines += '<td colspan="' + maxcol / childrenData.length / 2 + '"class="leftLine topLine"></td><td colspan="' + maxcol / childrenData.length / 2 + '"class="rightLine topLine"></td>';
        }
        lowerLines += '<td class="leftLine"></td></tr>';
        // var nodesLayer = $('<tr class="nodes">');
        $nodeWrapper.append(upperLines).append(lowerLines);
        chart.append($nodeWrapper)
      }
    }


  }

  createnode(data) {
    let opts = this.options
    let $nodeDiv = $('<div' + (opts.draggable ? ' draggable="true"' : '') + ( ' data-value="' + data[opts.nodeTitle] + '"') + (data.parentId ? ' data-parent="' + data.parentId + '"' : '') + '>')
      .addClass('node org-node');
    $nodeDiv.append('<div class="title" style="background-color: '+(data.className || '')+'">' + data[opts.nodeTitle] + '</div>')
      .append(typeof opts.nodeContent !== 'undefined' ? '<div class="content" style="border-color: '+ (data.className || '')+'">' + (data[opts.nodeContent] || '') + '</div>' : '');
    let nodeData = $.extend({}, data);
    $nodeDiv.data('nodeData', nodeData);
    return $nodeDiv;
  }

  smallestCommons(arr) {
    arr.sort((a, b) => {
      return a > b;
    });
    let result = 1;
    for (let j = arr[arr.length - 1]; j < Number.MAX_VALUE; j++) {
      let flag = true;
      for (let k = arr[0]; k <= arr[arr.length - 1]; k++) {
        if (j % k === 0) {
          result = j;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        result = j;
        break;
      }
    }
    return result;
  }
}


