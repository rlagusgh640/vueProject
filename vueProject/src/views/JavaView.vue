<template>
  <v-card
    class="mx-auto"
    max-width="88%"
  >
  <v-system-bar

color="#000000"
dark
> Project3 </v-system-bar>
    <v-img
      src="img/coding.png"
      height="240px"
      cover
    ></v-img>

    <v-card-title>
    <h1> <strong> 자바프로그래밍 II</strong></h1>
    </v-card-title>
    <br>

    <v-card-subtitle>
     자세한 정보를 알고싶으면 아래버튼 클릭
      
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        variant="text"
       
        @click="show=!show"
      >
       자세한정보
      </v-btn>

      <v-spacer></v-spacer>
      
      
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>
  
        
   <v-card
  
    max-width="100%"
    height="100%"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        0.팀원 및 역할
        <v-card
    class=""
    max-width="50%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
          김현호
        </v-list-item-title>
        <v-list-item-subtitle>알고리즘 작성 및 조립</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      ><img src="img/face1.png" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
          태형
        </v-list-item-title>
        <v-list-item-subtitle>코딩보조</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        
      ><img src="img/jeong.jpeg" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
      </p>
      <p class="text-h4 text--primary">
        1.준비물
      </p>
      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/computer.png" alt="projects"></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="150"
        
      ></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/oracle.png" alt="projects"></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="100"
        
      ></v-list-item-avatar>
      <v-list-item-avatar><img src="img/eclipse_94656.png" alt="projects"></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="300"
        
      ></v-list-item-avatar>
     
      
      <strong><p>개발환경:window10 ,개발언어:자바,DB Oracle,이클립스</p></strong>
      <div class="text--primary">
        <p class="text-h4 text--primary">
        2.코드
      </p>
        
        
      </div>
      Java 언어를 사용하여 음식점 포스기를 제작
      <img src="img/pospos.png" alt="projects" width="80%">
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
       
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
    
    
  }
</script>
