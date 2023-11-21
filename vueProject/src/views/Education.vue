

<template>
  
  <v-card  class="mx-auto" max-width="70%" tile>
    <v-system-bar

color="#000000"
dark
>   
<v-icon>mdi-school</v-icon><h3> Education</h3>
</v-system-bar>
      <v-img height="250" src="img/laptop.jpg"></v-img>
      <v-col>
        <v-avatar size="200" style="position:absolute; top: 60px"  >
          <v-img src="https://www.w3schools.com/howto/img_avatar.png" ></v-img>
        </v-avatar>
      </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-content>
            <v-list-item-title class="text-md-center"><h1>Kim Hyun Ho</h1></v-list-item-title>
            <v-list-item-subtitle class="text-md-center"><h3>Web Programer</h3></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            <h1>Introduction</h1>
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
            color="blue">
              <div>
                <div class="font-weight-normal">
   <v-card
    
    max-width="400"
                  
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          <strong><v-icon>mdi-school</v-icon> Profile</strong><br>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          김현호
        </v-list-item-title>
        <v-list-item-subtitle><ol>
          <li>생년월일:1998년 12월 21일</li>
          <li>혈액형:O형, Mbti : Intp</li>
          
        </ol></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
       
      ><img src="img/pro.png" alt="자기소개"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        자기소개서
      </v-btn>
    </v-card-actions>
  </v-card>
                </div>  
              </div>
            </v-timeline-item>
            <v-timeline-item
            color="purple">
              <div>
                <div class="font-weight-normal">
                  
                  <strong><v-icon>mdi-school</v-icon>학력사항<br></strong><br>
                 
                  <v-img
      src="img/dadae.jpg"
      height="250"
      max-width="70%"
      cover
    ></v-img>

    <v-card-title>
      <v-icon>mdi-home</v-icon>
      <strong>다대중학교 졸업</strong><br>
    </v-card-title>

    <v-card-subtitle>
      <v-card-actions>
      <v-btn :href="`https://school.busanedu.net/dadae-m/main.do`" target="_blank"
      color="error"
        variant="text"
      >
        Visit
      </v-btn>
    </v-card-actions>
    </v-card-subtitle>


    <v-img
      src="img/daedong.jpg"
      height="300"
      max-width="80%"
      cover
    ></v-img>
 
    <v-card-title>
      <strong>대동고등학교 졸업</strong><br>
    </v-card-title>

    <v-card-subtitle>
      <v-card-actions>
      <v-btn
      :href="`http://school.gyo6.net/daedonghs`" target="_blank"
      color="error"
        variant="text"
      >
      Visit
      </v-btn>
    </v-card-actions>
    </v-card-subtitle>
    <v-img
      src="img/sila.jpg"
      height="200"
      max-width="80%"
      cover
    ></v-img>

                  <strong></strong><br>
                  <v-card-title>
      <strong>신라대학교 재학중 </strong><br>
    </v-card-title>

    <v-card-subtitle>
      <v-card-actions>
      <v-btn
      :href="`https://www.silla.ac.kr/ko/`" target="_blank"
      color="error"
        variant="text"
      >
      Visit
      </v-btn>
    </v-card-actions>
    </v-card-subtitle>

                </div>
                
                
              </div>
            </v-timeline-item>
            <v-timeline-item
             color="green"
             
            >
              <div>
                <div class="font-weight-normal">
                  <v-card
    
    max-width="400"
                  
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          <strong><v-icon>mdi-school</v-icon> 자격증 정보</strong><br>
        </div>
        <v-list-item-title class="text-h5 mb-1">
          <ul>
            <li>
              정보처리기사
            </li>
            <li>
              컴퓨터활용능력 2급
            </li>
            <li>
              리눅스마스터 2급
            </li>
          </ul>
        </v-list-item-title>
    
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
       
      ><img src="img/medal.png" alt="자기소개"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
     
    </v-card-actions>
  </v-card>
                </div>
                
                
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
  </v-card>
 
</template>

<script>
  export default {
    data: () => ({
     
      
    }),
  }
</script>
<style scoped>
  .font-weight-normal{
    font-size: 20px;
  }
</style>