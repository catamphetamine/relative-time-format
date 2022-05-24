import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'my';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;