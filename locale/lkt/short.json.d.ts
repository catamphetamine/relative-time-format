import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lkt';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;