import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lkt';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;