describe("Форматтер чисел (parseCount / validateCount)", function () {
  it("должен правильно парсить числа", function () {
    expect(parseCount("123.45")).toBeCloseTo(123.45);
    expect(parseCount("5e2")).toBe(500);
  });

  it("должен выбрасывать ошибку на невалидное значение", function () {
    expect(() => parseCount("abc")).toThrowError("Невалидное значение");
  });

  it("должен возвращать ошибку через validateCount", function () {
    const result = validateCount("не число");
    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe("Невалидное значение");
  });

  it("должен возвращать число через validateCount", function () {
    expect(validateCount("3.14")).toBeCloseTo(3.14);
  });
});

describe("Класс Triangle и getTriangle", function () {
  it("должен возвращать корректный треугольник", function () {
    const t = getTriangle(3, 4, 5);
    expect(t.perimeter).toBe(12);
    expect(t.area).toBeCloseTo(6.0, 3);
  });

  it("должен возвращать объект с ошибкой, если треугольник невалиден", function () {
    const t = getTriangle(1, 1, 100);
    expect(t.perimeter).toBe("Ошибка! Треугольник не существует");
    expect(t.area).toBe("Ошибка! Треугольник не существует");
  });
});
