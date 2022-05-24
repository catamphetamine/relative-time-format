import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mni';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;