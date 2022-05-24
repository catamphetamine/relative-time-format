import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kk';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;