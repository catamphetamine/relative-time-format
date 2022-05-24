import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JM';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;