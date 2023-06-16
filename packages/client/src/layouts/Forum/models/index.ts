export type TPostProps = {
  author: string;
  post_name: string;
  message_count: number;
  create_date: string;
  upload_date: string;
  last_message: {
    user: {
      login: string;
    };
  };
};

export type TNewPostProps = {
  post_name: string;
  message: string;
};
