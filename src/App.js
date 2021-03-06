import React, { Component } from 'react';
import Topic from './Topic.js'
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      topics: [
        {
          topicName: 'Belize Eco Resort',
          percentage: 15,
          topicImage: 'http://www.belizeadventure.ca/wp-content/uploads/2014/09/Chaa-Creek-Belize-Tree-house-1024x768.jpg'
        },
        {
          topicName: 'Hawaii',
          percentage: 30,
          topicImage: 'https://www.getawaytoday.com/image/3759/11683/hawaii-2.jpg'
        },
        {
          topicName: 'Investment Properties',
          percentage: 30,
          topicImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFhUXGBgYGBgXGBgXFxcYGhsYFxgaFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx0tKy0tLS0rKy0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tNy0tKy0tLTctNysrK//AABEIAMwAzAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABCEAABAwIEBAMGAwUHAgcAAAABAgMRACEEBRIxBkFRYRMicTKBkaGxwQdC8BQjctHhJFJigpKy8RVzMzQ1Q1Njov/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACIRAAMBAAICAwEBAQEAAAAAAAABAhEDIRIxBCJBUWETcf/aAAwDAQACEQMRAD8Az91AK7CJNGsOz5htZJBneYoRjMKIJna/woQccuPKsyelqlcuvRSnhAEmVyL6j96i3m9p2rpDkFRN5qrNPSEtkoMV6J7VGFdaL5FhkklxcEI2B5mtfRy7ZYy1iBJEFX05T86h1qSsg+7v2oit7WJMxttt76mw+C8QbaulKbRQkD38SSBfnB9DV3COamI2UJ+W33qRHDzijCUmmXA8GrKRNjzoG1g2YpsVcQ2Dpjofcbn7irmXQAOt59BTU5wSoC1D3OD3hMWm1Z5hf8gU87NhzMk9K4SYVY2O9dYzhx9BvOnnFVHnNFvvRJ6LqcDGDZTIgqna3650Szh+FIuDo5RvI51S4USVOJVI2UNp2uPfRrOcOCUKWIAPm2v0mKXfsBH3D2NToU2bGZSfrU4zEtOFLh8q08uot9zXGDy5JbUQIUfZlXPcEdLCg2Ya9adZuOo6c6X+hDDliULWYUCDPr0r7PmARYXAEGlUPXlPPaKixbrxgBah7z/Ot8tNSSQZ4XzteGccSuVJ3CZ589I6085dxCy9BGpAO8/z+NY27qKheFcj8pp3yhrwwkE3i5+sUNT+nKjQGsXp8wc1p3gRtULubp12cSCYsTy+1J2MaBPsxzPX5dq4bw6EqKk8wAOUChRo5v50m0wrmOnKgOKxrjitQ8o5AgKMetQMpmpG3BFbh3RjjubAlUIJnqRQRokV0T8K51SQBV8rPRI3pYWwCB6VBh8C6u6G3FjqlClD4gV5qM6UzJIAHUzatd4Xy79lwwb1FJWW9SlyNK1wSlERKfXvesqvFGPGZRicpfbTqWw6lP8AeU2sJHqSIFF8iTLC55XHeBW08T+bL3mFqAWWnEJlQAmDEj1m96xzKm9KIHee9/8Amgnk85/8NhZRayTLl4hQQAQCfl3rTspyBLKPQH3daB8EMgL7/StDU0CI/XpSbes9HhSwEZZlwCjbeP186Y2cGI2qm0yQofrvRZmthb7C5Xi6OU4UVVxODoiDUb1MqOhM3WgTF4BJQZFZfxpwypMuNi3Tp6VreJBoJnrYLS/4TS10xtrUZdwelSVJKlJTpVbUdyRse1MfE+bpcAQFDUbkC8wOUUL4ZSF+IkiYIV8LUYxD7GqFQCL3E/A0N1ldkynUQ5LmRSkBxCtrEJJBPKaq5ipbqlKMAck38tG0Zkj2Do7DYirCsS0oXKR7x8aX5BY8EItKBt+jzqyHpQLHUFfKnQu4dCCJRcHff1oDh8vDjkIWkzcQZMTyii1NmNBfh3gtbn7x8QmxSnmecqjlbamXD8NgKJVJEyBy5/Gj7RKUpBNjGw6Daq+Kxckg2HL+tdyWkjIhtlZ3JGoEW5zPyqolhCl+EBHWN4FU80z5poHWoBRnSCd45+lWuG3taysjdKfn+hSkxznAViFBLi0c0/SreVPhLcJ0i5mRz/UVWfErcMbkT9Y91cOKTPlIjlemaKZh+HwwO47fCq+IwZQrax2q1jcTBBSRtcdDVZ3HLUIPL5VatJuhi4H4PxGMUp1LRU2lKtKpAT4gMAE+t49Kd3soUdJccOsWUCbAogaQD0ufjQXg3iFnC4JWvEFASZVhySVPOTMpjZFkzHSps9/EvEvtlCWQhChKlRK1BRgGdk0Fw7AHjNvBDTmIcRrU4iJiSNKQIHa9ZvjWAHikCBy5cp+5q7js5fXlzTw9oFbO0Agfn6FUKAkdDQjIQ4/BcUZvKjvYkD30mJ8NbY2fejRwu9pWBzJ/U1ojDkgUucFZPhvDddcnUhSgTq2SEpVsNudVMy4pQlKi1pTbyi6lbmdUmNgKGbTrEULlxdD+0kb1abArHGOPHRpCyFFSoEJAhPoDvNEGOPki5178rGJ3GoxFVdJaY+TyNWKK8W31oFlOauPNh1pSXEKiJBSrpBibgzXOcZuphpbr622kJgc1KJOwSLSTSv8AvHrewd/0KPIoLnLR8Nf8J+lK6eOmSbLcmJhVv/ykW+JrlfHbagQoGOsH+dFmrQ3yr0LfCzmlbpMCEmJtz71UzTGBt06CFmAfL57xziwo9lOQ4DHKU0y8tt26tJIUkibwSJ57Uq5vlRw7zmGDgWWyJO0hSQvaeU0hpVYHn1iIm81Pi61iJ5Df4UTfXrRqkQbj09KoYdLaEyoSs/8AEV8cUoqAMICrCbWrXK3o2aLXDmXeK4omYSLX57fSm3JMnCHypB0xBG3LqeW9AcnWltK9BE6gCJAIIEz76O5VxEllf70S2pCSSndPSZ3G9C09CTWDpleah1ei4UgGx2PWp31g3mguFxDS3W3GFSlVpHftyq45iAoqQgEnlaxjel12P40l2R5llWH8rr6UWMJKiNzyHX0qbJruK07QD2i4ofxBgf2vw0aiAhQM8rxI9bUTwTkYnSBA0x2JnnW+OGeXshxrA1rERcbczSzjcKdZj7U6Z86lJCpA69/+KAp0G4hQJJB60cTvsnbaMBfCjJPM8utEeHceywnELWkLdKNDQUJSnXIW4e6RsO9VErBEUMXV8sloJ43EJOmSFQmLCAANpjc3po4WzSWHUaQpaQVJkSDAtPoaQ5pg4eRihKmEAhYgkxFj3PWmNgDlw88/iW0MLSkpKzpJTaAASV8ikXA70y59kTidTjUGUgQhISlOkRJA586V+D86fwzicM4seG8sgpgQDGkFJ3EqUn4Vq77gbaClAmSEkD/FYn61Dyppno8UxUCXwCyrwMQFSfEDgPUkJ+sT8aLY/h3DJQVKKgmJN+XaiGSYDwU6RyUT/L5VHm+AUoAflHeP6GkZ3oxxjMqznhh4tKxbYhAVKUH2wiY1E9Zj4045bkYcwbScTGoIT50+VWncAk+t6NY9sqQGwk6YCT5hB2BkTUz2F8UBtI8ttUTpgciem21O8+hfgt6OeCsL4bIbBOkqWr/KVHRf0APvqh+IuVrxWHCErOptepIP5rGEk9ZJv6U05eyE2GwtUGcs3tzEHl8/gZoZ4kl5fpr4lmGZ/h/linWng+2kp16QT7YUjcHtJ+VS4rhFKFuw4rShAVcC6iSdPbanPJsOllJRzlSjNlEk8wfdtNVMbglOEhIIBMkARJ7zRVevQZhIWeFMOpvHBwKJ8NC1RAgjwVT5gepSL9aX8M2cQ8p1aiStSlE9VE2HpFaDmOB/ZsLiHzAUpHhjsDA+JJHwrLhiyyLyLzblNwRWTreirnHoX/ZUqeSmFaOUD2iBP15dAaC4tcqVqFpO3v5coNMmWZoFCFWMSDFwQN4O1qXwkAqVJUgqV5iIEzf60cvvsxlXBNGNR59zf1q+phZgKUQCNpvG4A6b1WS7PlQLdeRovkKQp5Np0mCSd7dPf8q2v6CgrwvnZwrgCj5T1BMGLHtWj8OZiw+HFJV5zbTNyN7A33pR/wClNqkKJ339ZtQ3GcMOIOtvEAEbTYj3ilNobOo1LAsWMHYn485qwhIOpQAPekPL84xWHQo4kyCPaSJNhc27Ryq1lnEC1KHhkLQQTvE9Itb0IpLobpc4tyxbxS+2VSgFOmfKQeo+9D8GClCUlWkgXFjXL/Gi9RSGkhOy0kyem/I16M4w5vCv9J+daqaQDSbMKYw+taEDdSgm1zcxYc6YOJeCnsG2046pP7wr0puFAJj2wdiQQY70FyAA4lmVFPnHmG452py4+zZ3FKQkpOhskIJ9pZMajblAFq9J9ES7EJbcVL50oSoKUEkqAg8xE2Bt7Qrx5BEg7i1d4bmOW8d9vjWpnYW8FjA22XDPi60lCt4CfMd+8V+igVOMMOadXkSsgdwNvnX51zvJFMaCpQVrTqAFo6g961ngn8QmsKw3hsaSlSEgJWAVJUmBpCuhA+1By9odwU5bHlwQv1g1aLGqhOFzxnFjxMOvWkEpJgi4hWx7KFMGFuJqVdMvd/VMrs5cnmmvMQyJ0iAKvPvAWoa+dV62q30BG09Z1gXW1z4akqgwYMwe9fZuhIA1KAmAJ59hXGFaSjkBPSuMwRJB3jbn8KHyrMGKfv7O8PggtMKEkbHtXH7IEGpsvfA9anxShvW/nYPasWOLML4mDeSdiUkeoUk1jefo0KukG+x6C0VonHHF7fgqw7RlWqF72gzA94FIKcMXm1qnUZsTuBEH0t9KORHM9eA/DZiSVakggDfaQLfzpkw2TocbQACEwVWJuVdZpbxmE0gpTHmTPqRTZwnjg4zpNymB9p+NZybmyK4132e4nJYSmB5dpG9UX1FkamxtJ62Hf4U1PYoITpIkfTrStny/3agkafNEe7nS4bfsOuiXKuKfFUELGlU+6mVwzA3pC4UwiVvhJAMhRk9h/WmdrAPNqIZV/quI7TttW8iS6Mj+h99SnUhAnpItVvLMrKUBTaRabE0sN8QutyFtI2383yg0Vy7jBWmzRt2UPhSHLQ3UyLNMiUXPFuDzSNibb9qiSFJsUd6sYni5JB1IInqRbob0yJwbTgCjeQLijlN+waR+fuHGCvENx+VWo3iwrQMVgitaFCNKTMXknbf0pA4exCUPpUva4nfTPOOdbJkpaUgKbKnU3uhaBBt+VY1Jq+3hFKMqXiUl/ELI8pQsD1MJEVWyvL3VgONo1+eCJA2g8zVjHYfSnFqEQHUJiQVXUpQjmdrxTNw9iv2fD+GnT5h5iQCq+8E3A9K7ejWRPsJxTyG8Yosw04pGmFSuRoSbWBINUeJsGFKUpMgICQZBExYwSL2irbj+rEpUTJDSwNt5H2Kq+zF5QZUspJSQRJsk9RNZpvoYPwhxYKXGtjqCvWRHyrXMKq1fn78NcR4eYpAMpUlYHSYCgPgk1vGHfEA1PyrGW8b2MLOK8oUqCecDf3UCy7iJt5ZQlKkqE2WNO1MTigaFYrKUqJUEi9YkN42vTLreFLlwQRvY19iMMpCZMbT+poX/ANMHIqT/AAkj6VG9lZMDUo/xKJpnisNU1vtYSZRmrT7ikIklNidJA9xO9XMevTauMtwQZ2t19aF8VZiG2nnP7qSB6nb50lrs6vZj2PKvFcKhutR9QSTapGHFMIKyJbVYjnfn8aDB5ZuVH1o2+8661C40mNhEgW5bGmvpEftlXHFBbSULGsWSk2MmBF6l4baLa1JUP/ESSf8ACQe1u9dry9hOlTiwUnlOxH9OtEcU7hSkLQ6kKSAPKSJ7VjfWHJd6Tl02UoygSD1PO/eg2fqMRFiAtPeZqVGYKTPhuEo6KAVae4qhm+bazcAwkAQCLARWSsMoq5e4pR8nlKZNrG0bUawedvBy/mtEncDuaW8CshetInkRz/4pqyhSVlSYAkfq9HaX6DLZfy55KnE+Kk9djET9O9N+NxLSGzCZSOQ6ClDwXGvMi/Ig3t2oi9iipudIuKRUjJoEM4UYlalLQdGrrAt059qasvxrjCA20kaBtImB0k0CyhUwk7Xt0k0f8PvEULf8DXZhODd0LBiaO5fxE4ySppRQTYxBt7xS4DXU16TSZDpZxjinFqWpUlRk+tXcJmS9ISeVgevrQtKqkC67DtCmAx62HA60YUJ3AUCOhCrVbXxM+UuJKhDshY0p576beX3UC8SuSquxHaG+EsTpx2GIt++QP9R0/et+mNtjevzlkSyMVhyOTzR+C01+jU3FSfI6aLvi9yyw3ibDtRPDPDnS+FlJvtRBkTF6GaTQypehZcV5qEVGBao30Wo+jMKeZYmBas1/ETErLbbaL61kkddN/wCvup7zVVtI3JHOkT8R30tHDyJjV9v50PW4dW+LYgotY0f4fx4RKF+yee8UAzJXmJTXmXP6jHWmtaiZNaEOKsMkuJ0pi14EA0FQ2oWi5o47iyEaVX0mQe0bfGgC8YdRV1ooSwC32WWyoWAPur51BNiIMXmi2UCUglNlKHmIrziNrS4mOYj4XrutO7wB+IWlApNx+r065Urw0alpI1J1SBMauvMb0l/s61KsJ+w2k0VYzV4Muo1yYQEiPZCLmPcAPdXXOoGHjHZjMkuLCW4Ukpva4KfXkaJPZbqQlSAIiSO/WkXJXk4gq0goUNO3UiCQfUfOnDLeJg0A2+k2Eahc2/w896mrrooXZ27l2gJWAbbxUqM0RF0qPf8ARokvM2FzpXIVyCVWt6UBewcKITccuVAFuIxava8r0V6RCeiuq8roCuOPpr6vUpmnbhfgdTkLxAhNiEcz/F0HasbSDiHTxHn4cZAXHP2hY8qPYnmqNx6fWtnwYkCqGXZeG0hKQAANhaieCTAqLmryZ6fBChYeuMyKgRqTtRMImvksXqdoY2j1jFKj2a5fWtXb61cZaqZTQitXkJdymLGIZhQ9aVeOMgGKUmFFC0JOk7i/Ue6nt5mVUDzK7hPSihtMZUqpww3McK404WnxpUBE7gjqI3qJpBbWNgIkHcH+E86efxLwiVpaULKkpn3SPp86RsFiwJbdEp5jmD/eQeR7V6cJXJ5fInFBfNGwthK0+1sfSDQFKCpSUDcRf3UQeQ4xBSrU0q6T+Uj05EdKKYNlp9JUAErQmQE2UI309aCocG6rCWSIBbQ2AZB59bzXGb5ctSkao3ItUWVZz4KgFpkxGrmRPPvRlzNWVwQYggibe/4VO6x6NSTXYs4lrwx5UW/MRuLdO/2rxKG1Jlsk77iDyB91H8Y4lSipMaVDltP6NUscy20RPlCuYSCZA29K1Xp1Ql6OuGMfh8OFBTSgSRJkG/a+1fZnmrSnEFEKSVXm2kHrPOgz4QpagFWB32/RqzhOH1LStQIISY07GuqVusxN+jRclaBA2BiNrRvtVx7fYduVAMgxJASlJMpIHm3kfaieMxqgohUA+lLQ3rDA69FfAV2hM1cQnqUzV3B4HUsBRhPMj7Uf4Vx+HbBaxDQKFm6on49qKZ1wkUjxcKdSNyiZMdUHnVEcerQHWBrgrhXDn96AFKBgSZjvfmetP+GwYFY5wzxE5hnJExspPXrbkRWyZTmbb6A42bH4jsal5oaenofHucwtKRFes2r1SprxVRXJVLLrIq2lNUWV2q60uaWhfISJTXzleF2K5C5rmKx+ys8iATSzjRCr8xTPmywEeppfxjQX60UofD1CrxJlvjMqA3A1J9Rf6VmWOwYPm2NbenDkVmGeYQIedSNgsx6G/wB6u+PX4TfJj9F7KsaEy08JbV7Q/unktNdvNrwjwINvaSobKTyI71HjsLzG4+Yq/gAMQwWTdxsFbXXT+dNVf4yH12WsU2lTiHoGlVlAbBQH5exFx8KurwQWoJCY2oNkwLiVszcjUj+JHmAH+XUKY8C8Sb3UAQb7FMi/zqO14vCmXq0hawBQfKZJvB2g9PfFDuJQUKEyNQn3xyo667pXI6j4VP4DTsBwBQAMA3gxS1mhvcM8wZJJIvEU/wDD+ZHwl6kjSYvbfn35Cg+NybwjDKkwq5Cjt/Ca5VlGI8KdMJ3IB5etbXYCCLuPLeIb8pCVpN/gR9TTA42FnVqEneRSQ3rcQlMElIgdd6OeK4QJ3gfoUFrPQSemWJFNT/CLzbYWmFmJUkbp9Ov9KoM8PvhHilBCeXX1ii2ScRuMEJclbfrce+r+JS32TXNIAUycK8SKw6ghwksk/wCjuO3Wi2e5AjEN/tGGjVEkCwX1/wA1I0U/HHoV7HrjXI0lP7UzG0rA2UOSh3oXw1nzmHVqQZB9pPJQ/nR3gHMw60rDOX0jyz+ZB3T7vvSrneAOExBQPZ9pPdJ5eoouSVS02Kcs2PJM7bxCdSDfmDuD3FFi5asSy/GrbIW0qD22PY055ZxehdnfIradx/SoeThz0elw8yfseWcRuKnZxUHegeFcCxqQoEHmDNX8O2ZqSoLMTQSxjtpFdNu+UntUViCmqzBIlB91LUgZ1hM8vxNAO1zXruHANq8Q2Rp7A1M6qjS6Oz+FJxuslz1YViHSOazHut9q0/O8aGWVr7W9TYVkzhmT1M1R8ZPWyf5D6wqPNT9D76GMuFh1KxyM/D2h7xRtQtH660PzRqRP+b+fyn4VYyJonWkM41Ck+wpSVJ/hWdvmRVrAyjEOpn2Sodbg0Jxz39mac/M2st+72kH7UbybHhYed06VOEqjoTU3Mv0LjfWF5xKtKVqiSkSfrUeDcJPKOvSAB/OqC8YSAm5B58k3v7qov46UqCSbXPft8/lSJl6Pq1g14TBJcBxCzYEpQOwsT8RXjmdqaCkISVAWlRAFfYN6MKykJgaZk7Em5+c71GzlwxQU0qwI9rmk8o61j/0EtcF41OpxCkAhe08u3rVvGKUFnS0INxf9RVLA4EoJEiRAtz3G/WjCUKNxS7QUsvMZSpQhUR0pa414QAbLzSYKB5kj8yevqK01lmKhxrQUkgiQbH051RNYw6ylhj3AGYlLimFGQq6b8+ceoqlxvlYaf1JHlcGq2wUPaA+vvqri0nCYy1vDct6TP0pz47wviYULAnSQoHsbH6ivUh+UHmUsoQckxxYfQ6PykSOqTZQ+H0FPXH+BDrAeSB5PNIG6TFZ0E1rfDKTisuSk38q2j7hA+RBrIf4czMMC5FuRt6HkfQ0SKJuLH9b0JbaKVlCuRKD7tvnFF07A+40I2S/k2auMK1IUR1Sbg1pmQcQt4hIAhK4uk/Udayoprth4pIIJBGxFv+KTycapFPHyVJsalXtXXiAkHmKRcq4tIhLwn/EN/eOdMDWbtrgpWD9fhUb4miueRUhlBmuMQ8EpkmwoX/1VITJIFJ/EeeKcBSDCeff+lEuPQHeEPFmc+OrSg/uwbd+9LxH0NfBcmuiKpiVKwmtunpwB+vlUOJR5b8vpz+VTpFdOIkR8fpRg4K5JCVtHaRM9UHyn4GrGEJQnmJj5/wDFfYxkhQ7+U+ot/Krjbct6FWWDz3tcUi/4LR0y7GkepqN9gFcgSI8wFrbVcw+XFaAv8wNgegqTLkgKUlY9pJnr7qS2MQSw7yVYdISoEoASE8xfmKjYzVLQmDtysd9/hQk/u0mPaBNxvBFVnHlLkzJIHpasU6c6wY0ZuHHdKGykESkmPNH3puy1zUgE2PMd6zfL37gKMKvpPLe1H15oUmPMPQW+VDUBTRrqdqheq0UxVR6guiiUYv8AiOxpxiiPzBKvt9qZ3R4uXnuxPwT/AEoJ+Kaf7Qk//Wn6qo9ln/p3T9wr6KivS+Nf0IOafuzMVJrSvwqfll5votKv9Qg/7RWaqSY35VoP4VIjxzf8g/3Gjl/YXgpcT4fRjXgP78/GD/KrCEyJr3jMf2531T9BXzH/ALg6K+RSk12+xkI6bMiuVb10wd6+KetAOPSqrDRI2kVC2KtoIoKYUo6Lh5mq2LVMDrep3FzYVC/7foBQphNHKE10fvXwr3p60aAZynnUh2rki9SpTRGA55olxJA2UlXunzfauce4FOkJ9qTHeZEUYbZO4EkJV8Iv9KWcTOtK09gP60m/ZjQaVjtKdJTaZ/mI9aGuYhAUFatt+t6OP4ZGiSTPJXalzMEgOAHmLHkZNL8UzPJo7y1ZWpdwRpIjme49D9a8y7DlURA337WNc5dhFF5IaJBEmPTpRVvUVJAgQI9/5prH0auwricjQGkrC4URGmOY3M/reoWVSPNYi3wo5lj6/DCYCwSCZm3WO9XlMMLJKkgHuJPxoVf9N8R08cRXChNBcO+qi7arCo6ovmTKvxU/8wn/ALQ/3KoviFlGV8h+5Cf9VvvQH8UFf2k/9tH1VRjjJWnAtpGxLY92kn616Xx39EQc6+7M/IFab+GGH04Zxe2pw/AJA/nWZAfetj4FbAwLcc5PxUZp0vWIwzTi0zjnv4kj5Cu8AmfE7q+gA+1Q50Zxrs//ADRVjBWB/iNa2HC7OWwQqK9XvXSj5/hXr/tVww8BgipajQL1M5vQMNHyBeo13UfWp2aia2PrWGM9Ar0Db1rqK6TuK1GM8jb1o7kvDjr8EDSmfaP260c4RyNlbYdWnUqbA+yI6CnNCbURPycvi8F3FZG0zhyEiVAglR3PI+g7VkGesqbdKUjmfgb1vOapHhK9PvWScYIAMjcipuR/YdxJ1x6xaTnC0p0qMcr7GhmaY4rKBY6dine1X8SgFN+godg1aZgC5AM+6i6ALOR40tvBTspsRI9DvTDliJ2/NurnBvQ7H4dPhgwAap4F5TSgpJO4SZuCO4oaWmyzQMoeiQDaYPrEg9hRhw7Wm3Sl7JlSpQ5GR8AIj40exKykgDoKTg3cP//Z'
        }
      ],
      topicNameToAdd: '',
      topicPercentageToAdd: '',
      topicImageToAdd: ''
    }
  }

  submitTopic = () => {
    var stateClone = Object.assign({}, this.state);

    stateClone.topics.push({
      topicName: this.state.topicNameToAdd,
      percentage: this.state.topicPercentageToAdd,
      topicImage: this.state.topicImageToAdd
    })

    this.setState({
      topics: stateClone.topics,
      topicNameToAdd: '',
      topicPercentageToAdd: '',
      topicImageToAdd: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Marks Most Common Convo Topics</h1>
        <input placeholder='topic name' value={this.state.topicNameToAdd} onChange={(e) => this.setState({ topicNameToAdd: e.target.value })}/>
        <input placeholder='percentage' value={this.state.topicPercentageToAdd} onChange={(e) => this.setState({ topicPercentageToAdd: e.target.value })}/>
        <input placeholder='image url' value={this.state.topicImageToAdd} onChange={(e) => this.setState({ topicImageToAdd: e.target.value })}/>
        <button onClick={this.submitTopic}>Click to Add Topic</button>
        {this.state.topics.map((item, index) => {
          return (
            <Topic
              topicName={item.topicName}
              percentage={item.percentage}
              topicImage={item.topicImage}
            />
          )
        })}

      </div>
    );
  }
}

export default App;
