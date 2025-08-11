# 博客图片支持功能

## 概述

博客系统现在支持在Markdown文章中插入图片，包括以下特性：

- 🖼️ **响应式图片显示**
- 📝 **图片标题支持**
- 🎨 **美观的样式设计**
- ⚡ **懒加载优化**
- 🔍 **悬停缩放效果**

## 使用方法

### 基本语法

在Markdown文章中使用标准语法插入图片：

```markdown
![图片描述](/images/blog/your-image.jpg "图片标题")
```

### 参数说明

- `图片描述`：图片的alt文本，用于无障碍访问
- `/images/blog/your-image.jpg`：图片路径
- `"图片标题"`：可选的图片标题，会显示在图片下方

### 示例

```markdown
![技术架构图](/images/blog/tech-stack.svg "现代Web开发技术栈：React + TypeScript + Vite + Tailwind CSS")
```

## 图片存储

### 目录结构

```
public/
├── images/
│   └── blog/
│       ├── tech-stack.svg
│       ├── deployment-flow.svg
│       └── your-images/
```

### 支持的格式

- **SVG**：推荐用于图表和图标
- **PNG**：适合截图和复杂图像
- **JPG/JPEG**：适合照片
- **WebP**：现代浏览器支持的高效格式

## 图片组件特性

### 样式特性

- **圆角边框**：现代化的圆角设计
- **阴影效果**：轻微的阴影增加层次感
- **悬停缩放**：鼠标悬停时轻微放大
- **响应式设计**：自动适配不同屏幕尺寸

### 性能优化

- **懒加载**：图片在进入视口时才加载
- **自动尺寸**：根据容器自动调整尺寸
- **优化渲染**：使用CSS transform进行动画

## 最佳实践

### 1. 图片命名

使用描述性的文件名：

```
✅ 好的命名：
- tech-stack.svg
- deployment-flow.svg
- ai-tools-comparison.png

❌ 避免的命名：
- image1.jpg
- untitled.png
- IMG_001.jpg
```

### 2. 图片尺寸

- **宽度**：建议不超过800px
- **高度**：根据内容需要调整
- **文件大小**：建议小于500KB

### 3. 图片路径

- 使用相对路径：`/images/blog/`
- 避免使用绝对URL（除非是外部图片）
- 确保路径正确，区分大小写

### 4. 图片描述

- 提供有意义的alt文本
- 使用图片标题补充说明
- 考虑无障碍访问需求

## 技术实现

### 组件结构

```tsx
<BlogImage
  src="/images/blog/example.svg"
  alt="示例图片"
  caption="这是图片的标题"
  className="custom-class"
/>
```

### 自定义样式

可以通过CSS自定义图片样式：

```css
/* 自定义图片容器样式 */
.blog-image-container {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
}

/* 自定义图片样式 */
.blog-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.blog-image:hover {
  transform: scale(1.02);
}
```

## 故障排除

### 常见问题

1. **图片不显示**
   - 检查文件路径是否正确
   - 确认文件存在于`public/images/blog/`目录
   - 验证文件名大小写

2. **图片加载缓慢**
   - 优化图片文件大小
   - 考虑使用WebP格式
   - 检查网络连接

3. **样式问题**
   - 检查CSS类名是否正确
   - 确认Tailwind CSS已正确加载
   - 验证组件导入

### 调试技巧

1. 打开浏览器开发者工具
2. 检查Network标签页查看图片加载状态
3. 查看Console是否有错误信息
4. 验证图片URL是否可访问

## 更新日志

- **v1.0.0**：初始图片支持功能
- 响应式设计
- 懒加载优化
- 悬停效果
- 标题支持

---

如有问题或建议，请参考项目文档或联系开发者。
