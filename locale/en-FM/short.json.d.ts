import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FM';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;