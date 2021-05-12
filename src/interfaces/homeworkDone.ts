export interface HomeworkDone {
  __typename:        string;
  title:             string;
  description?:       string;
  doneDate:           string;
  student?:           string;
  teacher:           string;
  hwType:            string;
  questions_answers: QuestionsAnswer[];
  expires_date:       string;
  homework:          null;
  calification?:      null;
  _id:               string;
  correctionDesription: string;
}

export interface QuestionsAnswer {
  image?:          string;
  isCorrect?:      string;
  correction?:     any;
  _id?:            string;
  answers?:        Answer[];
  title?:          string;
  questionNumber?: number;
  type?:           string;
  answer?:         string;
}

export interface Answer {
  _id?:       string;
  isCorrect?: boolean;
  text?:      string;
}
