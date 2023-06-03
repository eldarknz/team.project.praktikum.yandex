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
}

export const validate = new Validate();
