import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JM';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;