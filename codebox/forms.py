from django import forms

class NameForm(forms.Form):
    input_code = forms.CharField(label='code here')