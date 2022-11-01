import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mi';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;