class Validate {
  public isString = (
    content: unknown
  ): content is string => {
    return typeof content === 'string';
  };

  public email = (content: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      content
    );
  };

  public password = (
    content: string
  ): boolean => {
    return /^(?=.*\d)(?=.*[A-Z])[^\s]{7,40}$/.test(
      content
    );
  };

  public phone = (content: string): boolean => {
    return /^\+?\d{10,15}$/.test(content);
  };

  public name = (content: string): boolean => {
    return /^[А-ЯЁA-Z][а-яёa-z]+(-[А-ЯЁA-Z][а-яёa-z]+)?$/.test(
      content
    );
  };

  public login = (content: string): boolean => {
    return (
      !/^\d+$/.test(content) &&
      /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}$/.test(
        content
      )
    );
  };

  public passwordConfirm = (
    content: string
  ): boolean => {
    const password = (
      document.querySelector(
        '[name="password"]'
      ) as HTMLInputElement
    ).value;

    return password === content;
  };
}

export const validate = new Validate();
