/*
  MIT License

  Copyright (c) 2020 Temainfo Software

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
import { Component } from '@angular/core';

import * as json from './timelinedemo-dataproperties.json';

@Component({
  selector: 'app-timeline',
  templateUrl: './timelinedemo.component.html',
  styleUrls: ['./timelinedemo.component.scss'],
})
export class TimelineDemoComponent {

  public dataTableProperties;

  public dataEvents;

  public timeout;

  public dataLazy;

  public take = 20;

  public dataBasic = [
    {
      title: 'Dr. Gregory House 1',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 2',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 3',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 4',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 5',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 6',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 7',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 8',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 9',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }, {
      title: 'Dr. Gregory House 10',
      text: 'Mauris vulputate dolor vel finibus sagittis.'
    }
  ];

  public dataAdvanced = [
    {
      title: 'Dr. Gregory House 1',
      date: 1537477718000,
      text: 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)..',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 2',
      date: 1537477718000,
      text: 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 3',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 4',
      date: 1537477718000,
      text: 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 5',
      date: 1537477718000,
      text: 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 6',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 7',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 8',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 9',
      date: 1537477718000,
      text: 'What is Lorem Ipsum?\n' +
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n' +
        'Why do we use it?\n' +
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)..',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 10',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 11',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 12',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 13',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 14',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 15',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 16',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 17',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 18',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 19',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 20',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 21',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 22',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 23',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 24',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 25',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 26',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 27',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 28',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 29',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 30',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 31',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 32',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 32',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 33',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 34',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 35',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 36',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 37',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 38',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 39',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 40',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 41',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 42',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 43',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 44',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }, {
      title: 'Dr. Gregory House 45',
      date: 1537477718000,
      text: 'Mauris vulputate dolor vel finibus sagittis.',
      duration: 15,
      category: [
        {
          title: 'Anamnese',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        },
        {
          title: 'Evolution',
          text: 'Mauris vulputate dolor vel finibus sagittis.'
        }
      ]
    }
  ];

  constructor() {
    this.dataTableProperties = json.dataProperties;
  }

}

