# Static Website for Dr. Maurice Emelu

### Projects development

`Parcel` used as project builder
Build scripts:
```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build --dist-dir build-prod",
  "buildDev": "parcel build --no-optimize --dist-dir build",
},
```

#### Main dev folder sctructure

```
root/
    |__assets/
        |__img/
        |__styles/
    |__build/
        |__images/
        |__script/
        |__styles/
        |__*.html
    |__js/
        |__helpers/
        |__module/
        |__*.js
        |__*.json
```
